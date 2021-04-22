import React, { useRef } from "react";

import styled from "styled-components";

import { useHistory, useLocation } from "react-router";

import { InView } from "react-intersection-observer";

import { useScroll } from "../hooks/scroll";

import Spinner from "../UI/Loader/Loader";
import { Block } from "../UI/Layout/Layout";

import Item from "../components/Item/Item";

import { withData } from "../context/withData";
import { useData } from "../hooks/data";

const MainPageWrapp = styled.div``;

const MainPage = (props) => {
  const history = useHistory();
  const location = useLocation();

  let {
    list,
    setCurrent,
    addItemToDesctrictionList,
    limitCounter,
    setLimitCounter,
    isVisibile,
  } = props;

  if (list.length <= 0) return <Spinner />;

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
      {isVisibile ? (
        <InView
          as="div"
          onChange={(inView) => {
            if (inView) setLimitCounter((prev) => prev + 5);
          }}
        >
          fsafsasfasafafsfas
        </InView>
      ) : (
        <></>
      )}
    </MainPageWrapp>
  );
};

export default withData(MainPage);
