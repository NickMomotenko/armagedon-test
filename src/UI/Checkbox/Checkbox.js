import React, { useState } from "react";

import styled from "styled-components";

import checkboxIcon from "../../assets/icon/draw-check-mark.svg";

const CheckboxWrapp = styled.div``;

const CheckboxTrue = styled.input`
  display: none;
`;

const CheckboxFakeStatus = styled.div`
  display: inline-block;
  height: 18px;
  width: 18px;
  border-radius: 3px;
  border: 3px solid rgba(0, 0, 0, 0.87);
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
    background: url(${checkboxIcon}) center no-repeat;

    visibility: ${(props) => (props.checked ? "visible" : "hidden")};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Checkbox = ({ name, checked,  onChange, ...props }) => {
  return (
    <CheckboxWrapp {...props}>
      <CheckboxTrue
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <CheckboxFakeStatus checked={checked} />
    </CheckboxWrapp>
  );
};

export default Checkbox;
