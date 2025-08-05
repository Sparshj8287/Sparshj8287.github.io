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
import styled, { keyframes } from "styled-components";

// Slide-down animation for sidebar
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.bg || "#fff"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  animation: ${slideDown} 0.3s ease;
  padding: 1.5rem 1rem 1rem 1rem;
`;

function AppSideBar({ navItems, handleNavigation, open, onClose, theme }) {
  const sidebarRef = useRef();

  // Close sidebar if clicked outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <Overlay>
      <SidebarContainer
        ref={sidebarRef}
        theme={{ bg: theme === "light" ? "#fff" : "#222" }}
      >
        {navItems.map((item, key) => (
          <NavOptions
            key={key}
            onClick={() => {
              handleNavigation(item.label, item.endpoint);
              onClose();
            }}
            style={{ display: "block", margin: "1rem 0" }}
          >
            {item.label}
          </NavOptions>
        ))}
      </SidebarContainer>
    </Overlay>
  );
}

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
        "https://drive.google.com/file/d/1Fnk4RBRE0oa5V7th1Lez7duckDJVpRTm/view",
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

  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppHeaderWrpr>
      <AppHeading>Sparsh Jain</AppHeading>
      {screenWidth < 768 && (
        <span
          style={{ cursor: "pointer", zIndex: 1100 }}
          onClick={() => setSidebarOpen(true)}
        >
          {theme === "light" ? (
            <IoMenu size={24} />
          ) : (
            <IoMenu size={24} color="#fff" />
          )}
        </span>
      )}
      <AppSideBar
        navItems={navItems}
        handleNavigation={handleNavigation}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        theme={theme}
      />
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
