import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';

const Footer = styled.footer`
  position: relative;
  padding: 30px;
  background-color: ${theme.colors.secondaryBg};

  ${FlexWrapper} {
    gap: 50px;
  }
`
const AddressList = styled.address`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  width: 60px;
  height: 60px;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  border-image-slice: 1;
  transition: 0.5s;

  &:hover{
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
`
const Copyright = styled.small`
  display: inline-block;
  opacity: 0.7;

  ${theme.media.tablet} {
    align-self: center;
  }
`

export const S = {
  Footer,
  AddressList,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright
}
