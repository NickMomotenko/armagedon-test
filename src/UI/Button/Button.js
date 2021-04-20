import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button`
  background-color: #186dd6;

  display: inline-block;
  color: #fff;
  padding: 9px 16px;
  border-radius: 24px;

  font-size: 15px;

  &:disabled,
  &[disabled] {
    background-color: grey;
  }
`;

const Button = ({ text, onClick, ...props }) => {
  return (
    <ButtonWrapp disabled={false} onClick={onClick} {...props}>
      {text}
    </ButtonWrapp>
  );
};

export default Button;
