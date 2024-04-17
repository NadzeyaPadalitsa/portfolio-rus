import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { animateScroll as scroll} from 'react-scroll';

export const Logo:React.FC = () => {
  return (
    <LogoLink aria-label="logo vebsite" href={"index.html"} onClick={() => {scroll.scrollToTop() }}>
      <Icon role="img" iconId = {"logo"} width={"185"} height={"48"} viewBox={"0 0 185 48"} />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  color: ${theme.colors.font};
  transition: 0.5s;

  &:hover {
    color: ${theme.colors.accent};
  }
`
