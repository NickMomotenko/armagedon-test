import React, { useRef } from "react";

import styled from "styled-components";

import { useHistory, useLocation } from "react-router";

import { useScroll } from "../hooks/scroll";

import Spinner from "../UI/Loader/Loader";
import { Block } from "../UI/Layout/Layout";

import Item from "../components/Item/Item";

import { withData } from "../context/withData";

const MainPageWrapp = styled.div``;

const MainPage = ({ list, setCurrent, addItemToDesctrictionList }) => {
  const history = useHistory();
  const location = useLocation();

  if (!list) return <Spinner />;

  return (
    <MainPageWrapp>
      <Block as="ul">
        {list?.map((item) => (
          <Item
            key={item.id}
            item={item}
            addItemToDesctrictionList={() => addItemToDesctrictionList(item)}
            moreDetails={() => {
              setCurrent(item);
              history.push("/more");
            }}
            location={location}
          />
        ))}
      </Block>
      <div>fsafsasfasafafsfas</div>
    </MainPageWrapp>
  );
};

export default withData(MainPage);
