"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  AppHeaderWrpr,
  AppHeading,
  NavOptions,
  NavOptionWrpr,
  ToggleThemeButton,
} from "./style";
import { useTheme } from "../../utils/themeContext.jsx";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useRouter } from "next/navigation";
import AppSideBar from "../AppSidebar/index.jsx";

function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const navItems = [
    { label: "Home", endpoint: "/" },
    { label: "News", endpoint: "/news" },
    { label: "Publications", endpoint: "/publications" },
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
        "https://drive.google.com/file/d/1KQrBG2MtJLTlgJfLLe060MO1HXGXDncO/view",
        "_blank"
      );
      setSidebarOpen(false);
    } else {
      router.push(endpoint);
      setSidebarOpen(false);
    }
  };

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sidebarOpen) return;

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <AppHeaderWrpr>
      <AppHeading>Sparsh Jain</AppHeading>
      {sidebarOpen && (
        <AppSideBar
          navItems={navItems}
          handleNavigation={handleNavigation}
          sidebarRef={sidebarRef}
        />
      )}
      {screenWidth < 768 && (
        <div
          style={{ cursor: "pointer", zIndex: 1100 }}
          onClick={() => setSidebarOpen(true)}
        >
          {theme === "light" ? (
            <IoMenu size={24} />
          ) : (
            <IoMenu size={24} color="#fff" />
          )}
        </div>
      )}
      {screenWidth >= 768 && (
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
      )}
    </AppHeaderWrpr>
  );
}

export default AppHeader;
