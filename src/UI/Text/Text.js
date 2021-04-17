import React from "react";

import styled from "styled-components";

const TextWrapp = styled.div``;

const Text = ({ text, ...props }) => {
  return <TextWrapp {...props}>{text}</TextWrapp>;
};

export default Text;
