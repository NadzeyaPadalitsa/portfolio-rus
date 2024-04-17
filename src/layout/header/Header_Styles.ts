import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  padding: 10px 0;
  background-color: ${theme.colors.primaryBg};
`

export const S = {
  Header
}
