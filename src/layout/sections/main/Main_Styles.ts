import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const Main = styled.section`
  min-height: 100vh;
  display: flex;

  ${FlexWrapper} {
    gap: 30px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  box-shadow: 8px 8px 10px 2px ${theme.colors.accent};

  @media ${theme.media.mobile} {
    width: 300px;
    height: 350px;
  }
`

const MainTitle = styled.h1`
  margin: 0;
  ${font({ Fmax: 28, Fmin: 20 })};

  p {
    display: none;
  }
`

const Name = styled.p`
  margin-bottom: 20px;
  ${font({family: "'Raleway', sans-serif", weight: 700, Fmax: 60, Fmin: 36 })}
  letter-spacing: 5px;
  text-transform: uppercase;
  background-image: linear-gradient(to right top, blue, skyblue, blue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const S = {
  Main,
  Photo,
  MainTitle,
  Name
}
