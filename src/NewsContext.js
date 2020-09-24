import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const apikey = "ea7617383a904e069ffe9f4955c4065a";

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`)
      .then((response) => {
        console.log("I am here..");
        console.log(response.data.articles);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
