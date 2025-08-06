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

export const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  inset: 0;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.backgroundPrimary};
  box-shadow: ${({ theme }) => theme.accent} 0px 0px 10px;
  z-index: 1000;
  animation: ${slideDown} 0.3s ease;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavOptions = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textPrimary};
`;
