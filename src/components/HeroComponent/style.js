"use client";
import styled from "styled-components";

export const HeroComponentWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (min-width: 768px) and (max-width: 1079px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const HeroTextWrpr = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 768px) and (max-width: 1079px) {
    width: 100%;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const HeroTextHeading = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;

  span {
    background-clip: text;
    color: transparent;
    background: linear-gradient(to right, #ffd6e0, #e0d6ff, #c1f0db);
    -webkit-background-clip: text;
  }

  @media (min-width: 1080px) and (max-width: 1440px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 2.5rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 3rem;
  }

  /* @media (min-width: 300px) and (max-width: 766px) {
    font-size: 2rem;
  } */
`;

export const HeroTextDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
  a {
    color: ${({ theme }) => theme.accent};
    font-weight: 600;
  }

  @media (min-width: 1080px) and (max-width: 1440px) {
    font-size: 1.2rem;
  }
  @media (min-width: 768px) and (max-width: 1079px) {
    font-size: 1rem;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

export const MoreButtonsWrpr = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeroImageWrpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 50%;
  border-radius: 1rem;
  @media (min-width: 768px) and (max-width: 1079px) {
    width: 100%;
  }
  @media (min-width: 300px) and (max-width: 767px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    transform: scale(1.03);
    &:hover {
      transform: scale(1.06);
    }
    @media (min-width: 768px) and (max-width: 1079px) {
      height: 50vh;
    }
    @media (min-width: 300px) and (max-width: 767px) {
      height: 60vh;
    }
  }
`;
