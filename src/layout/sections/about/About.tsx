import React from 'react';
import { Description } from '../../../components/Description';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { S } from './About_Styles';

export const About: React.FC = () => {
  return (
    <S.About id={"about"}>
      <Container>
        <SectionTitle>Обо мне</SectionTitle>
        <S.AboutWrapper>
          <Description>Привет, я Надя Падалица, 33 года, Беларусь. Интересуюсь веб-разработкой и всем, что с ней связано.</Description>
          <Description>Я окончила «Белорусский государственный технологический университет». Училась на курсах верстки в <a href="https://htmlacademy.ru/profile/id1983015">htmlacademy</a> и "Профессиональная верстка на ReactJS" в <a href="https://it-incubator.io/education/html-css-in-react">IT-incubator</a>.</Description>
          <Description>Умею делать адаптивную верстку под различные устройства и браузеры. Я знаю, как автоматизировать свою работу с DevTools, Node.js, npm-skipts, Autoprefixer, Pixel Perfect, Gulp.
            Знакома с Webpack and Vite.
            Я знаю методологию БЭМ и умею создавать CSS-анимацию. Мое портфолио написано на ReactJS(TypeScript). Я знаю синтаксис и возможности Styled Components.</Description>
          <Description> Я пишу код, думая о простых и красивых решениях проблем. Хочу реализовывать отличные проекты с замечательными людьми.</Description>
          <Description> Я стремлюсь к профессиональному росту, легко завожу и поддерживаю разговор на любую тему, не теряю самообладание в конфликтных ситуациях, постоянно совершенствую свои знания, навыки и умения.</Description>
        </S.AboutWrapper>
      </Container>
    </S.About >
  );
};



