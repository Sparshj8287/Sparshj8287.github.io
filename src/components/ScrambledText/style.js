"use client";
import styled from "styled-components";

export const ScrambledTextWrpr = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
`;
