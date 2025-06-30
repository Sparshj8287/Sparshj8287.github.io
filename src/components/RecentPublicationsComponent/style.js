"use client";
import styled from "styled-components";

export const RecentPublicationsWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 5rem;
  @media (min-width: 1080px) and (max-width: 1440px) {
    gap: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    gap: 1rem;
  }
`;

export const PublicationHeading = styled.h1`
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

export const SeeMoreButtonWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
