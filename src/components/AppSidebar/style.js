import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: calc(100% - 2rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  box-shadow: ${({ theme }) => `0px 1px 10px ${theme.accent}`};
  position: absolute;
  border-radius: 1rem;
  top: 4rem;
  gap: 1rem;
`;

export const NavOptions = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
`;
