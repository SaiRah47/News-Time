import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apikey = "ea7617383a904e069ffe9f4955c4065a";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`
      );
      setData(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <NewsContext.Provider value={{ data, isLoading }}>
      {props.children}
    </NewsContext.Provider>
  );
};
