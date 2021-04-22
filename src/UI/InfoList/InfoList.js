import React from "react";
import { useLocation } from "react-router";

import styled from "styled-components";

import { dateFormat } from "../../utils";

import Text from "../Text/Text";

const InfoListItem = styled.li``;

const InfoListValue = styled.span``;

const InfoListWrapp = styled.ul`
  margin-bottom: 0.5em;

  ${InfoListItem} {
    align-items: baseline;
    display: flex;
    margin-bottom: 0.5em;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

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

const InfoList = ({ date, size, distance, item }) => {
  let location = useLocation();
  let isPageMore = location.pathname === "/more" ? true : false;
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
      {isPageMore ? (
        <>
          <InfoListItem>
            Абсолютная звездная величина
            <InfoListValue>{item?.absolute_magnitude_h}</InfoListValue>
          </InfoListItem>
          <InfoListItem>
            Центрический объект
            <InfoListValue>
              {item?.is_sentry_object ? "да" : "нет"}
            </InfoListValue>
          </InfoListItem>
        </>
      ) : (
        <></>
      )}
      {isPageMore ? (
        <>
          <Text text="Данные о приближении:" />
          {item?.close_approach_data.map((item, index) => (
            <>
              <InfoListItem key={index}>
                Дата
                <InfoListValue>{item?.close_approach_date}</InfoListValue>
              </InfoListItem>
              <InfoListItem>
                Летит вокруг
                <InfoListValue>{item?.orbiting_body}</InfoListValue>
              </InfoListItem>
              <InfoListItem>
                Cкорость
                <InfoListValue>{`${Math.round(
                  item?.relative_velocity?.kilometers_per_hour
                )} км/ч`}</InfoListValue>
              </InfoListItem>
              <InfoListItem>
                Растояние от Луны
                <InfoListValue>{`${Math.round(
                  item?.miss_distance?.lunar
                )}`}</InfoListValue>
              </InfoListItem>
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </InfoListWrapp>
  );
};

export default InfoList;
