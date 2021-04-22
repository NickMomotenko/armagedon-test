import React from "react";

import styled, { css } from "styled-components";
import { Switch, Route } from "react-router-dom";

import { withData } from "./context/withData";

import { useMobileWidth } from "./hooks/mobile";
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

const AppWrapp = styled.div`
  ${(props) => props.isMobile && `padding:16px`}
`;

const App = (props) => {
  const [moreDetails, setMoreDetails] = React.useState();

  let { data, newArr, setNewArr, limitCounter, setIsVisible } = props;

  const dangerCheckbox = useCheckbox();

  let { width } = useMobileWidth();

  let isMobile = width <= 480 ? true : false;

  return (
    <AppWrapp isMobile={isMobile}>
      <Container>
        <Header />
        <Row btw style={{ marginBottom: "22px" }}>
          <Label>
            <Row as="span" style={{ flexDirection: isMobile && `row` }}>
              <Checkbox
                style={{ marginRight: "10px" }}
                checked={dangerCheckbox.checked}
                name="danger"
                onChange={(event) => {
                  dangerCheckbox.onChange(event);
                  if (!event.target.checked) {
                    setIsVisible(true);
                    setNewArr(data.slice(0, limitCounter));
                  } else {
                    setIsVisible(false);
                    setNewArr(
                      newArr.filter(
                        (item) => item.is_potentially_hazardous_asteroid
                      )
                    );
                  }
                }}
              />
              <Text text="Показать только опасные" />
            </Row>
          </Label>
          <Block style={{ marginTop: isMobile && `14px` }}>
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
              list={newArr}
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
