import React from "react";

import styled from "styled-components";

const ColumnWrapp = styled.div``;

const RowWrapp = styled.div`
  display: flex;

  ${(props) => props.center && `align-items:center`};
  ${(props) => props.btw && `justify-content:space-between`};

  @media (max-width: 480px){
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
  }
`;

const PaperWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.12);
  border-radius: 12px;

  height: 100%;
  width: 100%;
`;

const BlockWrapp = styled.div``;

const LabelWrapp = styled.label``;

export const Column = ({ children, ...props }) => {
  return <ColumnWrapp {...props}>{children}</ColumnWrapp>;
};

export const Row = ({ children, ...props }) => {
  return <RowWrapp {...props}>{children}</RowWrapp>;
};

export const Block = ({ children, ...props }) => {
  return <BlockWrapp {...props}>{children}</BlockWrapp>;
};

export const Label = ({ children, ...props }) => {
  return <LabelWrapp {...props}>{children}</LabelWrapp>;
};

export const Paper = ({ children, ...props }) => {
  return <PaperWrapp {...props}>{children}</PaperWrapp>;
};
