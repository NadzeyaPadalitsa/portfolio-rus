import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Link } from '../../../../components/Link';
import { S } from '../Projects_Styles';

type ProjectPropsType = {
  title: string
  src: string
  srcSet: string
  srcSetWebp: string
  srcSetAvif: string
  text: string
  hrefPreview: string
  hrefCode: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <picture>
        <source type="image/avif" srcSet={props.srcSetAvif} />
        <source type="image/webp" srcSet={props.srcSetWebp} />
        <S.Image src={props.src} srcSet={props.srcSet} alt={props.title} />
      </picture>
      <S.Title>{props.title}</S.Title>
      <S.Text>{props.text}</S.Text>
      <FlexWrapper justify={"center"} align={"start"}>
        <Link href={props.hrefPreview}>
          <Icon iconId={"preview"} width={"20"} height={"20"} viewBox={"0 0 20 20"} />
          Live Preview
        </Link>
        <Link href={props.hrefCode}>
          <Icon iconId={"code"} width={"20"} height={"20"} viewBox={"0 0 20 20"} />
          View Code
        </Link>
      </FlexWrapper>
    </S.Project>
  );
};
