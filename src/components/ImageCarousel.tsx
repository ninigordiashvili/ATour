import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
`;

const scrollReverse = keyframes`
  0% {
    transform: translateX(-33.333%);
  }
  100% {
    transform: translateX(0);
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  position: relative;
`;

const Row = styled.div<{ $reverse?: boolean }>`
  display: flex;
  gap: 8px;
  animation: ${({ $reverse }) => ($reverse ? scrollReverse : scroll)} 65s linear
    infinite;
  width: max-content;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 330px;
  height: 220px;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 160px;

    &:hover {
      transform: scale(2);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  topRowImages: ImageItem[];
  bottomRowImages: ImageItem[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  topRowImages,
  bottomRowImages,
}) => {
  // Triple the images to ensure seamless infinite scroll without gaps
  const duplicatedTopRow = [...topRowImages, ...topRowImages, ...topRowImages];
  const duplicatedBottomRow = [
    ...bottomRowImages,
    ...bottomRowImages,
    ...bottomRowImages,
  ];

  return (
    <CarouselContainer>
      <Row>
        {duplicatedTopRow.map((image, index) => (
          <ImageWrapper key={`top-${index}`}>
            <Image src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </Row>
      <Row $reverse>
        {duplicatedBottomRow.map((image, index) => (
          <ImageWrapper key={`bottom-${index}`}>
            <Image src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </Row>
    </CarouselContainer>
  );
};

export default ImageCarousel;
