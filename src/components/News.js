import React, { useContext, useState } from "react";
import { NewsContext } from "../NewsContext";
import Article from "./Article";
import Spinner from "./Spinner";

function News(props) {
  const { data, isLoading } = useContext(NewsContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="row" style={{ marginBottom: "100px" }}>
      {data.articles.map((news) => (
        <div className="col-sm-12 col-md-6 col-lg-3" key={news.url}>
          <Article key={news.url} data={news} />
        </div>
      ))}
    </div>
  );
}

export default News;
