"use client";
import React from "react";
import {
  AppHeaderWrpr,
  AppHeading,
  NavOptions,
  NavOptionWrpr,
  ToggleThemeButton,
} from "./style";
import { useTheme } from "../../utils/themeContext.jsx";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useRouter } from "next/navigation";

function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const navItems = [
    { label: "Home", endpoint: "/" },
    { label: "News", endpoint: "/news" },
    {
      label: "Publications",
      endpoint: "/publications",
    },
    { label: "Talks", endpoint: "/talks" },
    { label: "Teaching", endpoint: "/teaching" },
    { label: "Blogs", endpoint: "/blogs" },
    {
      label: "CV",
      endpoint:
        "https://drive.google.com/file/d/1KQrBG2MtJLTlgJfLLe060MO1HXGXDncO/view",
    },
  ];

  const handleNavigation = (label, endpoint) => {
    if (label === "CV") {
      window.open(
        "https://drive.google.com/file/d/1Fnk4RBRE0oa5V7th1Lez7duckDJVpRTm/view",
        "_blank"
      );
    } else {
      router.push(endpoint);
    }
  };

  return (
    <AppHeaderWrpr>
      <AppHeading>Sparsh Jain</AppHeading>
      <NavOptionWrpr>
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
      </NavOptionWrpr>
    </AppHeaderWrpr>
  );
}

export default AppHeader;
