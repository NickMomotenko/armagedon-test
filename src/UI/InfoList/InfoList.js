import React from "react";

import styled from "styled-components";

import { dateFormat } from "../../utils";

const InfoListItem = styled.li``;

const InfoListValue = styled.span``;

const InfoListWrapp = styled.ul`
  margin-bottom: 0.5em;

  ${InfoListItem} {
    align-items: baseline;
    display: flex;
    margin-bottom: 0.5em;
    width: 100%;

    &::before {
      content: "";
      border-bottom: 1px dashed #000000;
      flex-grow: 1;
      order: 2;
      margin: 0 5px;
    }
  }

  ${InfoListValue} {
    order: 3;
  }
`;

const InfoList = ({ date, size, distance }) => {
  return (
    <InfoListWrapp>
      <InfoListItem>
        Дата<InfoListValue>{dateFormat(date)}</InfoListValue>
      </InfoListItem>
      <InfoListItem>
        Расстояние<InfoListValue>{`${Math.round(distance)} км`}</InfoListValue>
      </InfoListItem>
      <InfoListItem>
        Размер<InfoListValue>{`${Math.round(size)} м`}</InfoListValue>
      </InfoListItem>
    </InfoListWrapp>
  );
};

export default InfoList;
