import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { TfiSearch } from "react-icons/tfi";
import { LiaOpencart } from "react-icons/lia";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";

// components
import { Cart, Chat, UserProfile, Notification } from "./";

const NavButton = ({ title, icon, color, customfunc, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customfunc}
        style={{ color }}
        className="relative text-2xl rounded-full p-3"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full w-2 h-2 right-2 top-2"
        />
          {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();


  useEffect(()=>{
    // HANDLER TO SET THE WIDTH OF THE SCREEN
    const handleResize=()=>{
      setScreenSize(window.innerWidth);
    }

    window.addEventListener('resize',handleResize);

    handleResize();

    return ()=>{
      window.removeEventListener('resize', handleResize);
    }
  },[]);

  useEffect(()=>{
    if (screenSize <= 900) {
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize])

  return (
    <div className="flex justify-between align-center p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        icon={<AiOutlineMenuUnfold />}
        color="#484848"
        customfunc={() => setActiveMenu((prevState) => !prevState)}
      />
      <div className="flex">
        {/* Cart */}
        <NavButton
          title="Cart"
          icon={<LiaOpencart />}
          color="#484848"
          customfunc={() => handleClick("cart")}
        />

        {/* Chat */}
        <NavButton
          title="Chat"
          icon={<BsChatLeft />}
          color="#484848"
          dotColor={"#22c55e"}
          customfunc={() => handleClick("chat")}
        />

        {/* Notification */}
        <NavButton
          title="Notification"
          icon={<RiNotification3Line />}
          color="#484848"
          dotColor={"#22c55e"}
          customfunc={() => {
            handleClick("notification");
          }}
        />

        {/* User Profile */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg text-center"
            onClick={() => {
              handleClick("userProfile");
            }}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="profile images"
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 font-bold text-14 ml-1">
                Harsh
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-2xl" />
          </div>
        </TooltipComponent>
        {/* clicked */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};
export default Navbar;
