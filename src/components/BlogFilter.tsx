import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {} from "typescript";

const BlogFilter = ({ setSearchparams, postQuery, latest }) => {
  const [search, setSearch] = useState(postQuery || "");
  const [checked, seChecked] = useState(latest);
  //   console.log(postQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchparams(params);
  };
  return (
    <>
      <form autoComplete="'off" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label style={{ padding: "0 1rem" }}>
          <input
            type="checkbox"
            name="latest"
            value={checked}
            onChange={(e) => {
              seChecked(e.target.checked);
            }}
          />{" "}
          New only
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default BlogFilter;
