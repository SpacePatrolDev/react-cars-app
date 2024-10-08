import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import MclarenCarImg from "../../../assests/images/mclaren-orange-big.png";
import BlobImg from "../../../assests/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 4em;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
    `};
`;

const Header = styled.h5`
  ${tw`
        text-red-500
    `};
`;

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl
        mb-4
        text-black
        sm:text-3xl
        sm:leading-snug
        md:text-5xl
        md:font-extrabold
        lg:font-black
        lg:leading-normal
        xl:text-6xl
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        mt-4
    `};
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Header>Welcome To RentMyCar</Header>
        <Slogan>Rent The Best Quality Cars In Town</Slogan>
        <Description>
          Best selection of quality rental cars from the local stores to order
          remotely at the best price for you at affordable rates tailored for
          you.
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Car" />
          <Button theme="filled" text="Rent Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="red blob" />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} alt="Jeep car" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
