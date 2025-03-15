import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavigationTabs = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-[#f5eac4] pt-16">
      {/* Tab Buttons */}
      <div className="flex gap-4">
        <NavLink
          to="chat"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-lg font-medium transition ${
              isActive ? "bg-[#ae792b] text-white" : "bg-[#efc88e] text-gray-700"
            }`
          }
        >
          Chat
        </NavLink>

        <NavLink
          to="ngopage"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-lg font-medium transition ${
              isActive ? "bg-[#ae792b] text-white" : "bg-[#efc88e] text-gray-700"
            }`
          }
        >
          NGO Page
        </NavLink>
      </div>

      {/* Render Child Components (ChatApp / NGOPage) */}
      <div className="w-full p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationTabs;
