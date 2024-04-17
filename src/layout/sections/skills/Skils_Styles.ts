import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Skills = styled.section`
  position: relative;
`

//Skill

const SkillList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0;
  list-style-type: none;
`
const SKillItem = styled.li`
  align-self: center;
  background-color: ${theme.colors.secondaryBg};
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.font};
  position: relative;
  padding: 20px;
  border: 1px solid transparent;
  border-image: linear-gradient(to left top, ${theme.colors.accent} 10%,  transparent 30%, transparent 70%, ${theme.colors.accent} 90%);
  border-image-slice: 1;
`
const SkillTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
`

export const S = {
  Skills,
  SkillList,
  SKillItem,
  SkillTitle
}
