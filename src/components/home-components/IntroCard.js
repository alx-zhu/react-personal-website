import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

const IntroCard = ({ images, title, text, vertical }) => {
  const cardRef = useRef();
  const [cardOpacity, setCardOpacity] = useState(0);
  const [y, setY] = useState();

  const getPosition = () => {
    setY(cardRef.current.offsetTop);
  };

  // set initial card reference point
  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });

  const listenToScroll = () => {
    const threshold = -200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll + threshold > y) {
      setCardOpacity(1);
    } else {
      setCardOpacity(0);
    }
  };

  if (vertical)
    return (
      <IntroCardOpacityController opac={cardOpacity} ref={cardRef}>
        <IntroCardContainer vertical>
          <ImageGroup>
            {images.map((image) => {
              return <img src={image.src} alt={image.alt} key={image.alt} />;
            })}
          </ImageGroup>
          <IntroCardContent>
            <IntroCardTitle>{title}</IntroCardTitle>
            <IntroCardText>{text}</IntroCardText>
          </IntroCardContent>
        </IntroCardContainer>
      </IntroCardOpacityController>
    );
  else
    return (
      <IntroCardOpacityController opac={cardOpacity} ref={cardRef}>
        <IntroCardContainer>
          <img src={images[0].src} alt={images[0].alt} />
          <IntroCardContent>
            <IntroCardTitle>{title}</IntroCardTitle>
            <IntroCardText>{text}</IntroCardText>
          </IntroCardContent>
        </IntroCardContainer>
      </IntroCardOpacityController>
    );
};

export default IntroCard;

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  > img {
    height: 250px;
    margin: 0 10px;
  }
  margin-top: 10px;
  margin-bottom: 20px;
`;

const IntroCardOpacityController = styled.div`
  opacity: ${(props) => props.opac};
  transition: 500ms opacity ease-in-out;
`;

const IntroCardContainer = styled.div`
  background-color: var(--surface-color-solid);
  width: 60vw;
  height: minmax(300px, auto);
  padding: 20px;
  margin: 40px 0px;
  box-shadow: var(--box-shadow-thin);
  border-radius: 10px;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: flex-start;
  align-items: center;
  text-align: ${(props) => (props.vertical ? "center" : "left")};
  position: relative;
  /* align-self: flex-end;
  margin-right: 100px; */
  > img {
    height: 250px;
    margin-right: 30px;
  }
  ::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    right: -10px;
    bottom: -10px;
    background-color: var(--p-color-trans);
    border-radius: 10px;
    box-shadow: var(--box-shadow-thick);
    opacity: inherit;
    z-index: -1;
  }
`;

const IntroCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroCardText = styled.p`
  max-width: 40vw;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-right: 20px;
  line-height: 22px;
`;

const IntroCardTitle = styled.h2`
  font-weight: 600;
`;
