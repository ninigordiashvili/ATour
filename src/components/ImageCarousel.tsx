import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
`;

const scrollReverse = keyframes`
  0% {
    transform: translateX(-50%);
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
  width: max-content;
  will-change: transform;
  transform: translateZ(0);

  /* Desktop - smooth animation */
  @media (min-width: 769px) {
    animation: ${({ $reverse }) => ($reverse ? scrollReverse : scroll)} 65s
      linear infinite;
  }

  /* Mobile - slower animation to reduce jank */
  @media (max-width: 768px) {
    animation: ${({ $reverse }) => ($reverse ? scrollReverse : scroll)} 80s
      linear infinite;
  }

  /* Disable animations on very low-end devices */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 330px;
  height: 220px;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 160px;
  }
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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const duplicatedTopRow = React.useMemo(
    () => [...topRowImages, ...topRowImages],
    [topRowImages],
  );
  const duplicatedBottomRow = React.useMemo(
    () => [...bottomRowImages, ...bottomRowImages],
    [bottomRowImages],
  );

  return (
    <CarouselContainer>
      <Row>
        {duplicatedTopRow.map((image, index) => (
          <ImageWrapper key={`top-${image.src}-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 240px, 330px"
              quality={isMobile ? 60 : 75}
              priority={false}
              style={{
                objectFit: "cover",
              }}
            />
          </ImageWrapper>
        ))}
      </Row>
      <Row $reverse>
        {duplicatedBottomRow.map((image, index) => (
          <ImageWrapper key={`bottom-${image.src}-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 240px, 330px"
              quality={isMobile ? 60 : 75}
              priority={false}
              style={{
                objectFit: "cover",
              }}
            />
          </ImageWrapper>
        ))}
      </Row>
    </CarouselContainer>
  );
};

export default ImageCarousel;
