import React from "react";
import styled from "styled-components";

const imagesList = [
  {
    src: "images/profile-pic.jpg",
    alt: "Alex Profile Picture",
    orient: "vertical-big",
  },
  {
    src: "images/family-pic.jpg",
    alt: "Christmas Family Picture",
    orient: "vertical",
  },
  {
    src: "images/all-state-picture.png",
    alt: "NYSSMA Conference All State 2019",
    orient: "big",
  },
  {
    src: "images/soccer-team.jpg",
    alt: "Spackenkill Soccer Team 2020",
    orient: "big",
  },
  {
    src: "images/friends.jpg",
    alt: "Alex, Liam, and Morgan",
    orient: "vertical",
  },
];

const Heading = ({ opac }) => {
  return (
    <HeadingContainer>
      <ImageGrid>
        {imagesList.map((img) => (
          <img
            src={img.src}
            key={img.src}
            alt={img.alt}
            className={img.orient}
          />
        ))}
      </ImageGrid>
      <NamePlate opac={opac}>
        <h1>Hello, I'm Alex!</h1>
      </NamePlate>
    </HeadingContainer>
  );
};

export default Heading;

// Heading
const HeadingContainer = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  position: relative;
  /* ::before {
    position: absolute;
    content: "";
    top: -5%;
    background-color: var(--text-color);
    width: 50%;
    height: 0.5px;
  } */
  ::after {
    position: absolute;
    content: "";
    bottom: -40px;
    background-color: var(--text-color);
    width: 50%;
    height: 0.5px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  width: 60vw;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(6vw, 1fr));
  grid-auto-rows: 4vw;
  grid-auto-flow: dense;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .horizontal {
    grid-column: span 4;
    grid-row: span 2;
  }
  .vertical {
    grid-row: span 4;
    grid-column: span 2;
  }
  .big {
    grid-column: span 4;
    grid-row: span 4;
  }
  .vertical-big {
    grid-row: span 8;
    grid-column: span 3;
  }
`;

const NamePlate = styled.div`
  position: absolute;
  top: 35%;
  bottom: 35%;
  width: 75vw;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opac};
  transition: 500ms opacity ease-in-out;
  h1 {
    text-align: center;
    opacity: 100%;
    font-size: 5em;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;
