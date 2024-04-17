import styled from 'styled-components';
import { Description } from '../../../components/Description';
import { theme } from "../../../styles/Theme"



const About = styled.section`
  position: relative;
`
const AboutWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 5px;
    top: 0;
    left: 0;
    background-color: ${theme.colors.accent};
  }

  ${Description} {
    margin-bottom: 30px;
    a {
      font-weight: 700;
    }
  }
`

export const S = {
  About,
  AboutWrapper
}
