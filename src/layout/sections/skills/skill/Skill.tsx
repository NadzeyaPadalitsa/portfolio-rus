import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skils_Styles';


type HardPropsType = {
  iconId: string
  title: string
}

export const Skill: React.FC<HardPropsType> = (props: HardPropsType) => {
  return (
    <S.SKillItem>
      <Icon iconId = {props.iconId} viewBox={"-15 0 150 150"}/>
      <S.SkillTitle>{props.title}</S.SkillTitle>
    </S.SKillItem>
  );
};

