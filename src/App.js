import React, { useState, useRef } from "react";

import styled, { css } from "styled-components";
import { Switch, Route } from "react-router-dom";

import { useIntersection } from "use-intersection";

import { useData, checkPotentialHazardousAsteroid } from "./hooks/data";
import { useDestrictionList } from "./hooks/destructionList";
import { useCheckbox } from "./hooks/checkbox";

import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Block, Row, Label } from "./UI/Layout/Layout";
import Text from "./UI/Text/Text";
import Checkbox from "./UI/Checkbox/Checkbox";

import DestrictionPage from "./pages/DestrictionPage";
import MainPage from "./pages/MainPage";
import More from "./pages/More";
import { withData } from "./context/withData";

const AppWrapp = styled.div``;

const App = (props) => {
  const [moreDetails, setMoreDetails] = React.useState();

  let { data, filterData } = props;

  // const { data, filterData } = useData();

  const dangerCheckbox = useCheckbox();

  return (
    <AppWrapp>
      <Container>
        <Header />
        <Row btw style={{ marginBottom: "22px" }}>
          <Label>
            <Row as="span">
              <Checkbox
                style={{ marginRight: "10px" }}
                checked={dangerCheckbox.checked}
                name="danger"
                onChange={(event) => {
                  dangerCheckbox.onChange(event);
                  filterData(event.target.checked);
                }}
              />
              <Text text="Показать только опасные" />
            </Row>
          </Label>
          <Block>
            <Text text="Расстояние в километрах, в дистанциях до луны" />
          </Block>
        </Row>
        <Switch>
          <Route path="/more">
            <More current={moreDetails} />
          </Route>
          <Route path="/destriction">
            <DestrictionPage />
          </Route>
          <Route path="/">
            <MainPage
              list={data}
              current={moreDetails}
              setCurrent={setMoreDetails}
            />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </AppWrapp>
  );
};

export default withData(App);
