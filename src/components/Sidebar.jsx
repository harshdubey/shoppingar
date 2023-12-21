import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-sidebar-dark-bg text-white text-md my-auto";

  const normalLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-yellow-500 hover:text-white my-auto";

  const handleCloseSideMenu=()=>{
    if(activeMenu && screenSize <=900){
      setActiveMenu(false);
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={handleCloseSideMenu}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware />
              <span className="uppercase font-Consolas">shoppingar</span>
            </Link>
            <TooltipComponent content={"Close"} position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-yellow-500 hover:text-white mt-4 block cursor-pointer text-slate-900"
                onClick={() => {setActiveMenu((prevActiveMenu)=> !prevActiveMenu)}}
              >
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-light-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        key={link.name}
                        to={`/${link.name}`}
                        onClick={handleCloseSideMenu}
                        className={( {isActive} ) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <span className="my-auto">{link.icon}</span>
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
