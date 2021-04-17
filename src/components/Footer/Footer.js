import React from "react";

import styled from "styled-components";

import { useCurrentDate } from "../../hooks/currentDate";

import Text from "../../UI/Text/Text";

const FooterWrapp = styled.footer``;

const Footer = () => {
  const { date } = useCurrentDate();

  return (
    <FooterWrapp>
      <Text text={`${date?.getFullYear()} © Все права и планета защищены`} />
    </FooterWrapp>
  );
};

export default Footer;
