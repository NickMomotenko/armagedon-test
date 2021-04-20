import React from "react";

import styled, { css } from "styled-components";

import { generateSizeForIcon } from "../../utils";

import Text from "../../UI/Text/Text";
import LabelText from "../../UI/LabelText/LabelText";
import InfoList from "../../UI/InfoList/InfoList";
import Button from "../../UI/Button/Button";
import { Block, Row } from "../../UI/Layout/Layout";

import dinoIcon from "../../assets/dino.png";
import kamenIcon from "../../assets/kamen1.svg";

const ItemWrapp = styled.div`
  background-color: ${(props) => props.color};
  height: 200px;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 25px 40px 24px 340px;
  overflow: hidden;
  margin-bottom: 16px;
  transition: box-shadow 0.4s;

  position: relative;

  ${(props) =>
    !props.flag
      ? css`
          background: linear-gradient(90deg, #cff37d 0%, #7de88c 100%);
        `
      : css`
          background: linear-gradient(90deg, #ffb199 0%, #ff0844 100%);
        `}

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: "";
    display: inline-block;
    width: 56px;
    height: 48px;
    background: url(${dinoIcon}) center no-repeat;

    position: absolute;
    bottom: -1px;
    left: 16px;
  }

  &:hover {
    box-shadow: 0 0 10px #8585d5;
  }
`;

const ItemImage = styled.img.attrs(() => ({ src: kamenIcon }))`
  display: inline-block;
  width: ${(props) => props.option.size && props.option.size};
  height: ${(props) => props.option.size && props.option.size};
  background: url(${kamenIcon}) center no-repeat;

  position: absolute;
  top: ${(props) => props.option.top || "28px"};
  left: 100px;
`;

const Item = ({ item, addItemToDesctrictionList, moreDetails }) => {
  return (
    <ItemWrapp
      key={item?.id}
      as="li"
      flag={item?.is_potentially_hazardous_asteroid}
    >
      <ItemImage
        option={generateSizeForIcon(
          Math.round(item?.estimated_diameter?.meters?.estimated_diameter_min)
        )}
      />
      <Row btw>
        <Block>
          <Text text={item?.name} fontSize="24px" bold />
          <Block style={{ maxWidth: "100%", width: "290px" }}>
            <InfoList
              date={item?.close_approach_data[0]?.close_approach_date}
              size={item?.estimated_diameter?.meters?.estimated_diameter_min}
              distance={item?.close_approach_data[0]?.miss_distance?.kilometers}
            />
          </Block>
        </Block>
        <Block style={{ textAlign: "center" }}>
          <Text text="Оценка:" style={{ marginBottom: "10px" }} />
          <Text
            text={
              item?.is_potentially_hazardous_asteroid ? "опасен" : "не опасен"
            }
            bold
            style={{ marginBottom: "10px" }}
          />
          <LabelText text="На уничтожение" />
        </Block>
      </Row>
      <Row style={{ justifyContent: "flex-end", marginTop: "10px" }}>
        <Button
          text="Подробнее"
          style={{ marginRight: "10px" }}
          onClick={moreDetails}
        />

        <Button
          text="Добавить на уничтожение"
          style={{ marginRight: "0" }}
          onClick={addItemToDesctrictionList}
        />
      </Row>
    </ItemWrapp>
  );
};

export default Item;
