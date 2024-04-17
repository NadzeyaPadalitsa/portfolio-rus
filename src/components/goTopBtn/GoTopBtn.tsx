import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';
import { theme } from '../../styles/Theme';

export const GoTopBtn: React.FC = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true)
      } else { setShowBtn(false) }
    })
  }, [])
  return (
    <>
      {showBtn && (
        <StyledGoTopBtn aria-label={"to main"} onClick={() => { scroll.scrollToTop() }}>
          <Icon iconId={"goTop"} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
        </StyledGoTopBtn>
      )}

    </>
  );
};

const StyledGoTopBtn = styled.button`
  border: 0;
  background-color:rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 30px;
  bottom: 30px;
  color: ${theme.colors.font};

  &:hover,
  &:active {
    color: ${theme.colors.accent};
  }
`
