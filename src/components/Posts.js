import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resData = await res.json();
    setData(resData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts...!!!</h1>
      {data.map((el) => {
        return (
          <Link key={el.id} to={"/posts/" + `${el.id}`}>
            <div
              style={{
                border: "1px solid red",
                margin: "10px",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h1> Post Number: {el?.id} </h1>
              <h1> Title: {el?.title} </h1>
              <h1> Body: {el?.body} </h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
