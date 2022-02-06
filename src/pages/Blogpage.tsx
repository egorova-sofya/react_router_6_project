import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { isTemplateTail } from "typescript";
// @ts-ignore
import BlogFilter from "../components/BlogFilter.tsx";

const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  console.log(useLocation());

  const [searchParams, setSearchparams] = useSearchParams();

  const postQuery = searchParams.get(`post`) || ``;
  const latest = searchParams.has("latest");
  const startsFrom = latest ? 80 : 1;

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
          <BlogFilter
            setSearchparams={setSearchparams}
            postQuer={postQuery}
            latest={latest}
          />

          <Link to="/posts/new">Add new post</Link>
          {posts
            .filter(
              (item) => item.title.includes(postQuery) && item.id >= startsFrom
            )
            .map((item) => {
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
