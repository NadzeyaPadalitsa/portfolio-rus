import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  align-self: center;
  font-family: 'Popins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid transparent;
  border-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  border-image-slice: 1;
  padding: 14px;
  width: 200px;
  color: ${theme.colors.font};
  cursor: pointer;

  &:hover,
  &:active {
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
`
