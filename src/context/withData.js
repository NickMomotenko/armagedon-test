import React, { useState, useEffect } from "react";

import { getDate } from "../utils";

const key = `GcUkWz2JcrSWivoakXYfMYKxTwIhothr5eJctBP0`;
const path = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getDate()}&end_date=${`2021-04-25`}&api_key=${key}`;

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [destrictionList, setDestrictionList] = React.useState([]);
  const [data, setData] = useState([]);
  const [newArr, setNewArr] = useState([]);
  const [limitCounter, setLimitCounter] = useState(5);

  useEffect(() => {
    fetchedData();
  }, []);

  useEffect(() => {
    setNewArr(data.slice(0, limitCounter));
  }, [data]);

  function fetchedData() {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        let newData = Object.values(data?.near_earth_objects);
        let flatData = newData.flat();

        setData(flatData);
      });
  }

  const filterData = (flag) => {
    // подумать над оптимизацией
    // if (flag) {
    //   setData(data?.filter((item) => item.is_potentially_hazardous_asteroid));
    // } else {
    //   fetchedData();
    // }
  };

  const addItemToDesctrictionList = (item) => {
    setDestrictionList([...destrictionList, item]);
  };

  return (
    <DataContext.Provider
      value={{
        destrictionList,
        addItemToDesctrictionList,
        data,
        setData,
        newArr,
        setNewArr,
        setLimitCounter,
        limitCounter,
        fetchedData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const withData = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DataContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </DataContext.Consumer>
      );
    }
  };
};
