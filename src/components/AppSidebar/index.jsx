"use client";

import { useTheme } from "../../utils/themeContext.jsx";
import { NavOptions, Overlay, SidebarContainer } from "./style";
import { ToggleThemeButton } from "../AppHeader/style";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function AppSideBar({ navItems, handleNavigation, sidebarRef }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <Overlay>
      <SidebarContainer ref={sidebarRef}>
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
    </Overlay>
  );
}

export default AppSideBar;
