import React from "react";

import styled from "styled-components";

import { Row, Block, Label } from "../../UI/Layout/Layout";
import Text from "../../UI/Text/Text";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Menu from "../Menu/Menu";

const HeaderWrapp = styled.header``;

const Header = () => {
  return (
    <HeaderWrapp>
      <Row btw>
        <Block>
          <Row>
            <Text text="ARMAGGEDON V" />
            {/* <Menu /> */}
          </Row>
          <Text text="Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле." />

          <Row btw>
            <Label>
              <Row as="span">
                <Checkbox />
                <Text text="Показать только опасные" />
              </Row>
            </Label>
            <Block>
              <Text text="Расстояние в километрах, в дистанциях до луны" />
            </Block>
          </Row>
        </Block>
        <Block></Block>
      </Row>
    </HeaderWrapp>
  );
};

export default Header;
