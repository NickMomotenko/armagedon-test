import React, { useState, useEffect } from "react";

import { getDate } from "../utils";

const key = `GcUkWz2JcrSWivoakXYfMYKxTwIhothr5eJctBP0`;
// const path = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${key}`;
const path = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getDate()}&end_date=${`2021-04-25`}&api_key=${key}`;

export const useData = () => {
  const [data, setData] = useState();
  const [limitCounter, setLimitCounter] = useState(5);

  const fetchedData = () => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        let newData = Object.values(data?.near_earth_objects);
        let flatData = newData.flat().slice(0, limitCounter);

        setData(flatData);
      });
  };

  const filterData = (flag) => {
    // подумать над оптимизацией
    if (flag) {
      setData(data?.filter((item) => item.is_potentially_hazardous_asteroid));
    } else {
      fetchedData();
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return { data, setData, filterData, setLimitCounter, limitCounter };
};
