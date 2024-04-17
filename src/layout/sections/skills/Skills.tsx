import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skils_Styles';
import { Fade } from 'react-awesome-reveal';

const skillsData = [
  { iconId: "html", title: "HTML" },
  { iconId: "css", title: "CSS" },
  { iconId: "js", title: "JavaScript" },
  { iconId: "sass", title: "Sass" },
  { iconId: "react", title: "React JS" },
  { iconId: "ts", title: "TypeScript" },
  { iconId: "git", title: "Git" },
  { iconId: "github", title: "Github" },
  { iconId: "figma", title: "Figma" },
  { iconId: "styled", title: "Styled components" }
]

export const Skills: React.FC = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle> Skills</SectionTitle>
        <Fade cascade={true} damping={0.3}>
          <S.SkillList>
            {skillsData.map((s, index) => {
              return <Skill iconId={s.iconId} title={s.title} key={index} />
            })}
          </S.SkillList>
        </Fade>
      </Container>
    </S.Skills>
  );
};








