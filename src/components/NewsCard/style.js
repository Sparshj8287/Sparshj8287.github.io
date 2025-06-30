"use client";
import styled from "styled-components";

export const NewsCardWrpr = styled.div`
  height: auto;
  width: 100%;
  border-radius: 1rem;
  display: flex;

  /* Initial state - hidden and positioned off-screen */
  opacity: ${({ isvisible }) => (isvisible ? 1 : 0)};
  transform: ${({ isvisible }) =>
    isvisible ? "translateX(0) scale(1)" : "translateX(50px) scale(0.95)"};

  /* Smooth transition with bounce effect */
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: ${({ animationdelay }) => `${animationdelay || 0}s`};

  /* Add subtle hover effect when visible */
  &:hover {
    transform: ${({ isvisible }) =>
      isvisible
        ? "translateX(-5px) scale(1.02)"
        : "translateX(50px) scale(0.95)"};
    transition: transform 0.3s ease;
  }

  @media (min-width: 300px) and (max-width: 767px) {
    transform: ${({ isvisible }) =>
      isvisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)"};

    &:hover {
      transform: ${({ isvisible }) =>
        isvisible
          ? "translateY(-3px) scale(1.01)"
          : "translateY(30px) scale(0.95)"};
    }
  }
`;

export const Line = styled.div`
  height: auto;
  width: 2px;
  background-color: ${({ theme }) => theme.accent};

  /* Add a subtle growth animation for the line */
  transform-origin: top;
  transform: scaleY(0);
  animation: ${({ isvisible }) =>
    isvisible ? "lineGrow 0.5s ease-out 0.3s forwards" : "none"};

  @keyframes lineGrow {
    to {
      transform: scaleY(1);
    }
  }
`;

export const NewsHeading = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => `${theme.textSecondary}`};
  font-weight: 600;
  padding: 1rem;
  margin: 0;
  width: 12rem;

  @media (min-width: 1080px) and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 1rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1rem;
    width: 9rem;
  }
`;

export const NewsDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
`;

export const NewsDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textPrimary};
  padding: 1rem;
  width: calc(100% - 15rem);

  @media (min-width: 1080px) and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 1rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1rem;
    width: calc(100% - 9rem);
  }
`;
