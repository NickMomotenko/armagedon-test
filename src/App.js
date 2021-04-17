import React from "react";

import styled from "styled-components";

import { useData } from "./hooks/data";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Block, Column, Row } from "./UI/Layout/Layout";
import Text from "./UI/Text/Text";

import dinoIcon from "./assets/dino.png";
import kamenIcon from "./assets/kamen.png";

const AppWrapp = styled.div``;

const Item = styled.div`
  background-color: ${(props) => props.color};
  height: 200px;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 25px 40px 24px 340px;
  overflow:hidden;

  position: relative;

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

  &:after {
    content: "";
    display: inline-block;
    width: 72px;
    height: 72px;
    background: url(${kamenIcon}) center no-repeat;

    position: absolute;
    top: 28px;
    left: 100px;
  }
`;

const App = () => {
  const { data } = useData();

  console.log(data?.near_earth_objects[0]);

  const test = [
    {
      id: 1,
      title: "test",
      color: "#bcf081",
    },
  ];

  return (
    <AppWrapp>
      <Container>
        <Header />
        {test.map((item) => (
          <Item key={item.id} {...item}>
            <Row>
              <Column>
                <Text text="Название" />
              </Column>
              <Column>
                <Text text="Оценка" />
                <Text text="Не опасен" />
                <Text text="На уничтожение" />
              </Column>
            </Row>
          </Item>
        ))}
        {/* <Footer /> */}
      </Container>
    </AppWrapp>
  );
};

export default App;
