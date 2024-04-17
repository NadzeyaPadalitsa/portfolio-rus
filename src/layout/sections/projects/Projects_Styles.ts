import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';

const Projects = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 40px;
  }
`

const Project = styled.div`
  flex-grow: 1;
  width: 330px;
  padding: 25px 25px 40px;
  border: 1px solid transparent;
  border-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  border-image-slice: 1;
  background-color: ${theme.colors.primaryBg};


  ${theme.media.desktop} {
    max-width: 550px;
  }

`

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`

const Title = styled.h3`
  position: relative;
  margin-top: 40px;
  padding-bottom: 25px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 4px;
    border-radius: 83px;
    background-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  }
`
const Text = styled.p`
  margin: 30px 0;
  text-align: center;
`

export const S = {
  Projects,
  Project,
  Image,
  Title,
  Text
}
