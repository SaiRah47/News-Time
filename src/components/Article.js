import React from "react";

export default function Article({ data }) {
  var title = data.title.substr(0, 40);
  var description = data.description.substr(0, 140);
  console.log(data.content);
  return (
    <div className="cardNews" style={{ marginTop: "30px" }}>
      <div className="card h-100 mt-3">
        <a href="#">
          <img
            src={data.urlToImage}
            className="card-img-top"
            width="100%"
            style={{ height: "200px" }}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{data.author ? data.author : "TIMESOFINDIA.COM"}</p>
          <p>{data.content}</p>
          <a href={data.url} className="btn btn-outline-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
