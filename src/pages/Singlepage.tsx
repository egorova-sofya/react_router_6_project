import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Singlepage = () => {
  //   console.log(useParams());
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  const goBack = () => navigate(-1);
  //   const goBack = () => navigate("/posts", { state: "42" });
  //   const goHome = () => navigate("/", { replace: true, state: 123 });

  return (
    <>
      <div>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${id}/edit`}>Edit post</Link>
            <button onClick={goBack}>Go back</button>
          </>
        )}
      </div>
    </>
  );
};

export default Singlepage;
