import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  console.log(useLocation());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    return () => {};
  }, []);
  return (
    <>
      <ul>
        <div>
          <h1>Our news</h1>
          <Link to="/posts/new">Add new post</Link>
          {posts.map((item) => {
            return (
              <Link key={item.id} to={`/posts/${item.id}`}>
                <li>
                  <h4>{item.title}</h4>
                </li>
              </Link>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default Blogpage;
