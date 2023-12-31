import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// App Components
import { Navbar, Footer, Header, Sidebar, ThemeSettings } from "./components";

// App Pages
import {
  Ecommerce,
  Kanban,
  Orders,
  Employees,
  Editor,
  Customers,
  ColorPicker,
  Calendar,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{ background: "yellow", borderRadius: "50%" }}
              >
                <FiSettings className="text-white" />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ?
              (<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>)
              :
              (<div className="w-0 dark:bg-secondary-dark-bg">!Side Menu</div>)
          }
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"
              }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* Routes Starts */}
            <div>
              <Routes>
                {/* Navbar Route */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages Route */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Applications Route */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={< Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={< ColorPicker />} />

                {/* Charts Route */}
                <Route path="/line" element={<Line />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/area" element={<Area />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
