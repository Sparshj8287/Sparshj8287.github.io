"use client";

import React from "react";
import { useTheme } from "../../utils/themeContext.jsx";
import { NavOptions, SidebarContainer } from "./style";
import { ToggleThemeButton } from "../AppHeader/style";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function AppSideBar({ navItems, handleNavigation }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <SidebarContainer>
      {navItems.map((item, key) => (
        <NavOptions
          key={key}
          onClick={() => handleNavigation(item.label, item.endpoint)}
        >
          {item.label}
        </NavOptions>
      ))}
      <ToggleThemeButton onClick={toggleTheme}>
        {theme === "light" ? (
          <MdOutlineDarkMode size={24} />
        ) : (
          <MdOutlineLightMode size={24} color="#fff" />
        )}
      </ToggleThemeButton>
    </SidebarContainer>
  );
}

export default AppSideBar;
