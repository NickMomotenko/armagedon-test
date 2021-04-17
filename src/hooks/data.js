import React, { useState, useEffect } from "react";

const key = `GcUkWz2JcrSWivoakXYfMYKxTwIhothr5eJctBP0`;

// const path = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=3`;
const path = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${key}`;

export const useData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return { data };
};
