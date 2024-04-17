import React from 'react';
import photo from '../../../assets/images/photo.jpg';
import photo2x from '../../../assets/images/photo@2x.jpg';
import photoWebp from '../../../assets/images/photo.webp';
import photoWebp2x from '../../../assets/images/photo@2x.webp';
import photoAvif from '../../../assets/images/photo.avif';
import photoAvif2x from '../../../assets/images/photo@2x.avif';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <Tilt>
            <picture>
              <source type="image/avif" srcSet={`${photoAvif} 1x, ${photoAvif2x} 2x`} />
              <source type="image/webp" srcSet={`${photoWebp} 1x, ${photoWebp2x} 2x`} />
              <S.Photo src={photo} srcSet={`${photo2x} 2x`} alt="Picture Nadia Padalitsa" width={"350"} height={"430"} />
            </picture>
          </Tilt>
          <div>
            <S.Name>Nadia Padalitsa</S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </div>
        </FlexWrapper>
      </Container>
    </S.Main >
  );
};

