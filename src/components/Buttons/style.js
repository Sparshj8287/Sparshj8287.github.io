"use client";
import styled from "styled-components";

export const PrimaryButtonWrpr = styled.button`
  border: ${({ theme }) => `2px solid ${theme.textPrimary}`};
  background-color: ${({ theme }) => theme.textPrimary};
  border-radius: 2rem;
  height: 3rem;
  width: auto;
  padding: 0rem 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 1s ease;
  @media (min-width: 1080px) and (max-width: 1440px) {
    height: 2.5rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    height: 2rem;
    padding: 0rem 0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.accent};
    transition: width 0.8s ease;
    z-index: 1;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.backgroundPrimary};
    border: ${({ theme }) => `2px solid ${theme.accent}`};
  }
`;

export const PrimaryButtonText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgroundPrimary};
  position: relative;
  z-index: 2;
  transition: color 0.8s ease;
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 0.8125rem;
  }

  ${PrimaryButtonWrpr}:hover & {
    color: ${({ theme }) => theme.backgroundPrimary};
  }
`;

export const SecondaryButtonWrpr = styled.button`
  border: ${({ theme }) => `2px solid ${theme.textPrimary}`};
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 2rem;
  height: 3rem;
  width: auto;
  padding: 0rem 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 1s ease;
  @media (min-width: 1080px) and (max-width: 1440px) {
    height: 2.5rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    height: 2rem;
    padding: 0rem 0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.accent};
    transition: width 0.8s ease;
    z-index: 1;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.backgroundPrimary};
    border: ${({ theme }) => `2px solid ${theme.accent}`};
  }
`;

export const SecondaryButtonText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  position: relative;
  z-index: 2;
  transition: color 0.8s ease;
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 0.8125rem;
  }

  ${SecondaryButtonWrpr}:hover & {
    color: ${({ theme }) => theme.backgroundPrimary};
  }
`;

export const SpecialButtonWrpr = styled.button`
  border: none;
  border-radius: 2rem;
  height: 2rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => `${color}50`};
  cursor: pointer;
  padding: 0rem 1rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 8px ${({ color }) => color}, 0 0 8px ${({ color }) => color},
      0 0 8px ${({ color }) => color};
  }
`;

export const SpecialButtonText = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ color }) => color};
`;
