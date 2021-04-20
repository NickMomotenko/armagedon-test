import React, { useState } from "react";

export const useDestrictionList = () => {
  const [destructionList, setDestructionList] = useState([]);

  const addItemToDesctrictionList = (item) => {
    setDestructionList([...destructionList, item]);
  };

  return { destructionList, addItemToDesctrictionList };
};
