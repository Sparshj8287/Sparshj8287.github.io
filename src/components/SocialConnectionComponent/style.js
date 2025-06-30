"use client";
import styled from "styled-components";

export const SocialConnectionWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 5rem 10rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 2rem 1rem;
  }
`;

export const SocialConnectionIconWrpr = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 300px) and (max-width: 767px) {
    gap: 1rem;
  }
`;

export const SocialIconWrpr = styled.div`
  height: auto;
  width: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 1rem;
  background-color: ${({ currentcolor }) => currentcolor};
  transition: box-shadow 0.3s, filter 0.3s;
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 0.5rem;
    border-radius: 0.75rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: #000;
    transition: transform 0.3s;
  }

  &:hover {
    filter: drop-shadow(0 0 8px ${({ currentcolor }) => currentcolor});
  }

  &:hover svg {
    transform: scale(1.5);
  }
`;

export const CopyRightAndRightsText = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textPrimary};
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => `${theme.textSecondary}40`};
  text-align: center;
  width: 100%;
  font-weight: 400;
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1rem;
  }
`;
