"use client";
import styled from "styled-components";

export const AppHeaderWrpr = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  position: fixed;
  box-shadow: ${({ theme }) => `0px 1px 10px ${theme.accent}`};
  z-index: 10; /* Ensures it stays above other elements */
  @media (min-width: 768px) and (max-width: 1079px) {
    padding: 0rem 2rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 0rem 1rem;
  }
`;

export const AppHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 1.25rem;
  }
`;

export const NavOptionWrpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 300px) and (max-width: 767px) {
    display: none; /* Hide on small screens */
  }
`;

export const NavOptions = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 0.8125rem;
  }
`;

export const ToggleThemeButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 0.8125rem;
  }
`;
