import React from "react";

import styled from "styled-components";

import Text from "../Text/Text";

const LabelTextWrapp = styled.div`
  background-color: #186dd6;

  display: inline-block;
  color: #fff;
  padding: 14px 16px;
  border-radius: 24px;
`;

const LabelText = ({ text }) => {
  return <LabelTextWrapp>{text}</LabelTextWrapp>;
};

export default LabelText;
