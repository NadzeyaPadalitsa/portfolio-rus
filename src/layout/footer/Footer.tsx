import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Link } from '../../components/Link';
import { S } from './Footer_Styles';

const socialItemsData = [
  { iconId: "telegram", ariaLabel: "My telegram", href: "https://t.me/nadya31121990", width: "40", height: "34", viewBox:"0 0 40 34"},
  { iconId: "linkedin", ariaLabel: "My linkedin", href: "#", width: "35", height: "35", viewBox:"0 0 35 35"},
  { iconId: "gith", ariaLabel: "My github", href: "https://github.com/Nadin3112", width: "35", height: "35", viewBox:"0 0 35 35"}
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"}>
          <S.AddressList>
            <Link href={"tel:+375298066793"}>
              <Icon iconId={"tel"} width={"20"} height={"20"} viewBox={"0 0 25 25"} />
              <span>+375298066793</span>
            </Link>
            <Link href={"mailto:nadya-manko@mail.ru"}>
              <Icon iconId={"email"} width={"20"} height={"20"} viewBox={"0 0 25 25"} />
              <span>nadya-manko@mail.ru</span>
            </Link>
          </S.AddressList>
          <S.SocialList>
            {socialItemsData.map((s, index) => {
              return <S.SocialItem key={index}>
                <S.SocialLink aria-label={s.ariaLabel} href={s.href}>
                  <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox} />
                </S.SocialLink>
              </S.SocialItem>
            })}
          </S.SocialList>
          <S.Copyright>© 2023 Nadia Padalitsa, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};

