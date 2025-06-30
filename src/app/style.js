"use client";
import styled from "styled-components";

export const PageWrpr = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  padding: 5rem 10rem 0rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) and (max-width: 1079px) {
    padding: 5rem 2rem 0rem 2rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    padding: 5rem 1rem 0rem 1rem;
  }
`;

export const PageHeading = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: ${({ theme }) => `2px solid ${theme.accent}`};
  @media (min-width: 1080px) and (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 1.5rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;
