import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `};
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="3em" />
      <BookCard />
      <Marginer direction="vertical" margin="5em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="3em" />
      <AboutUs />
    </PageContainer>
  );
}
