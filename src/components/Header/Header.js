import React from "react";

import styled from "styled-components";

import { useMobileWidth } from "../../hooks/mobile";

import { Row, Block } from "../../UI/Layout/Layout";
import Text from "../../UI/Text/Text";

import Menu from "../Menu/Menu";

const HeaderWrapp = styled.header`
  padding-bottom: 24px;
  border-bottom: 1px solid #000000;
  margin-bottom: 25px;
`;

const Header = () => {
  let { width } = useMobileWidth();

  let isMobile = width <= 480 ? true : false;

  return (
    <HeaderWrapp>
      <Row btw>
        <Block style={{ width: "100%" }}>
          <Row center btw style={{ marginBottom: "10px" }}>
            <Text text="ARMAGGEDON V" fontSize="32px" />
          </Row>
          <Text
            text="Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле."
            style={{ maxWidth: "420px" }}
          />
        </Block>
        <Block style={{ marginTop: isMobile && `22px` }}>
          <Menu />
        </Block>
      </Row>
    </HeaderWrapp>
  );
};

export default Header;
