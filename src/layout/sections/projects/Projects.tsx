import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import sedonaImg from '../../../assets/images/project-1.jpg';
import sedonaImg2x from '../../../assets/images/project-1@2x.jpg';
import storeImg from '../../../assets/images/project-2.png';
import storeImg2x from '../../../assets/images/project-2@2x.png';
import keksImg from '../../../assets/images/project-3.png';
import keksImg2x from '../../../assets/images/project-3@2x.png';
import portfolioImg from '../../../assets/images/project-4.png';
import portfolioImg2x from '../../../assets/images/project-4@2x.png';
import nftImg from '../../../assets/images/project-5.png';
import nftImg2x from '../../../assets/images/project-5@2x.png';
import sedonaImgWebp from '../../../assets/images/project-1.webp';
import sedonaImgWebp2x from '../../../assets/images/project-1@2x.webp';
import sedonaImgAvif from '../../../assets/images/project-1.avif';
import sedonaImgAvif2x from '../../../assets/images/project-1@2x.avif';
import storeImgWebp from '../../../assets/images/project-2.webp';
import storeImgWebp2x from '../../../assets/images/project-2@2x.webp';
import storeImgAvif from '../../../assets/images/project-2.avif';
import storeImgAvif2x from '../../../assets/images/project-2@2x.avif';
import keksImgWebp from '../../../assets/images/project-3.webp';
import keksImgWebp2x from '../../../assets/images/project-3@2x.webp';
import keksImgAvif from '../../../assets/images/project-3.avif';
import keksImgAvif2x from '../../../assets/images/project-3@2x.avif';
import portfolioImgWebp from '../../../assets/images/project-4.webp';
import portfolioImgWebp2x from '../../../assets/images/project-4@2x.webp';
import portfolioImgAvif from '../../../assets/images/project-4.avif';
import portfolioImgAvif2x from '../../../assets/images/project-3@2x.avif';
import nftImgWebp from '../../../assets/images/project-5.webp';
import nftImgWebp2x from '../../../assets/images/project-5@2x.webp';
import nftImgAvif from '../../../assets/images/project-5.avif';
import nftImgAvif2x from '../../../assets/images/project-5@2x.avif';
import { Container } from '../../../components/Container';
import { S } from './Projects_Styles';

const projectsData = [
  {
    title: "Sedona",
    src: sedonaImg,
    srcSet: `${sedonaImg2x} 2x`,
    srcSetWebp: `${sedonaImgWebp} 1x, ${sedonaImgWebp2x} 2x`,
    srcSetAvif: `${sedonaImgAvif} 1x, ${sedonaImgAvif2x} 2x`,
    text: "Tech stack : HTML, JavaScript, SASS, Gulp, Bem",
    hrefPreview: "https://nadin3112.github.io/1983015-sedona-28/",
    hrefCode: "https://github.com/Nadin3112/1983015-sedona-28"
  },

  {
    title: "Online Store",
    src: storeImg,
    srcSet: `${storeImg2x} 2x`,
    srcSetWebp: `${storeImgWebp} 1x, ${storeImgWebp2x} 2x`,
    srcSetAvif: `${storeImgAvif} 1x, ${storeImgAvif2x} 2x`,
    text: "Tech stack : HTML, JavaScript, SASS, Gulp, Bem",
    hrefPreview: "https://nadin3112.github.io/classic-wood-style/",
    hrefCode: "https://github.com/Nadin3112/classic-wood-style"
  },

  {
    title: "Kekstagram",
    src: keksImg,
    srcSet: `${keksImg2x} 2x`,
    srcSetWebp: `${keksImgWebp} 1x, ${keksImgWebp2x} 2x`,
    srcSetAvif: `${keksImgAvif} 1x, ${keksImgAvif2x} 2x`,
    text: "Tech stack : HTML, JavaScript, Vite",
    hrefPreview: "https://github.com/Nadin3112/1983015-kekstagram-30",
    hrefCode: "https://github.com/Nadin3112/1983015-kekstagram-30"
  },

  {
    title: "Portfolio",
    src: portfolioImg,
    srcSet: `${portfolioImg2x} 2x`,
    srcSetWebp: `${portfolioImgWebp} 1x, ${portfolioImgWebp2x} 2x`,
    srcSetAvif: `${portfolioImgAvif} 1x, ${portfolioImgAvif2x} 2x`,
    text: "Tech stack : React, JavaScript, TypeScript, Styled Components",
    hrefPreview: "https://nadin3112.github.io/portfolio/",
    hrefCode: "https://github.com/Nadin3112/portfolio"
  },

  {
    title: "The Best NFTs Digital Art",
    src: nftImg,
    srcSet: `${nftImg2x} 2x`,
    srcSetWebp: `${nftImgWebp} 1x, ${nftImgWebp2x} 2x`,
    srcSetAvif: `${nftImgAvif} 1x, ${nftImgAvif2x} 2x`,
    text: "Tech stack : React, JavaScript, TypeScript, Styled Components",
    hrefPreview: "https://nadin3112.github.io/project-creative-art/",
    hrefCode: "https://github.com/Nadin3112/project-creative-art"
  }
]

export const Projects: React.FC = () => {
  return (
    <S.Projects id={"projects"}>
      <Container>
        <SectionTitle>My projects</SectionTitle>
        <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
          {projectsData.map((p, index) => {
            return <Project title={p.title} srcSetAvif={p.srcSetAvif} src={p.src} srcSet={p.srcSet} srcSetWebp={p.srcSetWebp}  hrefCode={p.hrefCode} hrefPreview={p.hrefPreview} text={p.text} key={index} />
          })}
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
