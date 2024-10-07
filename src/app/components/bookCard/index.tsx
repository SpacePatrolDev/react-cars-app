import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pl-2
        pr-2
        md:pt-2
        md:pb-2
        md:pl-8
        md:pr-8
    `};
`;

const ItemContainer = styled.div`
  ${tw`
        flex relative
    `};
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `};
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
    `};
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 2em;
  left: -2em;
`;

export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalOpen, setIsStartCalOpen] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [isEndCalOpen, setIsEndCalOpen] = useState(false);

  const toggleStartDateCal = () => {
    setIsStartCalOpen(!isStartCalOpen);
    setIsEndCalOpen(false);
  };

  const toggleEndDateCal = () => {
    setIsEndCalOpen(!isEndCalOpen);
    setIsStartCalOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCal}>Pick Up Date</Name>
        {isStartCalOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleEndDateCal}>Return Date</Name>
        {isEndCalOpen && (
          <DateCalendar value={endDate} onChange={setEndDate as any} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Reserve Your Car" />
    </CardContainer>
  );
}
