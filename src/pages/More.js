import React from "react";

import styled from "styled-components";
import { useLocation } from "react-router";

import Item from "../components/Item/Item";

import { useData } from "../hooks/data";
import { withData } from "../context/withData";

const MoreWrapp = styled.div``;

const More = (props) => {
  const location = useLocation();

  return (
    <MoreWrapp>
      <Item item={props.current && props.current} location={location} />
    </MoreWrapp>
  );
};

export default More;
