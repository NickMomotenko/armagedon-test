import React from "react";

import styled from "styled-components";
import Item from "../components/Item/Item";
import { withData } from "../context/withData";
import { useDestrictionList } from "../hooks/destructionList";
import Button from "../UI/Button/Button";
import { Block } from "../UI/Layout/Layout";

import Text from "../UI/Text/Text";

const DestrictionPageWrapp = styled.div``;

const DestrictionPage = (props) => {
  // const { destructionList } = useDestrictionList();

  let { destrictionList } = props;

  return (
    <DestrictionPageWrapp>
      <Block style={{ textAlign: "center" }}>
        <Text text="Список на уничтожение" fontSize="32px" />
        {destrictionList.length === 0 && (
          <Text text="Список пока что пуст... но не время расслабляться" />
        )}
      </Block>
      {destrictionList.length > 0 &&
        destrictionList.map((item) => (
          <Item key={item.id} item={item} list={[]} />
        ))}
      <Block style={{ textAlign: "center" }}>
        <Button
          text={
            destrictionList.length === 0
              ? "Еще не наступило время звать бригаду... как будет работенка -зови!;)"
              : "Заказать бригаду им. Брюса Уиллиса"
          }
          disabled={destrictionList.length === 0 ? true : false}
        />
      </Block>
    </DestrictionPageWrapp>
  );
};

export default withData(DestrictionPage);
