import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const PostDetail = () => {
  const param = useParams();

  const [data, setData] = useState({});

  const getPosts = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + param.id
    );
    const resData = await res.json();
    setData(resData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Post Detail...!!!</h1>
      <div
        key={data.id}
        style={{
          border: "1px solid red",
          margin: "10px",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h1> Post Number: {data?.id} </h1>
        <h1> Title: {data?.title} </h1>
        <h1> Body: {data?.body} </h1>
      </div>
    </div>
  );
};

export default PostDetail;
