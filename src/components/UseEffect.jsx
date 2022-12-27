import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("users");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("runs everytime a component re-rennders");
  });

  useEffect(() => {
    console.log("runs only once when components mounts");
  }, []);

  useEffect(() => {
    console.log(
      "runs everytime there is change or update in the value of dependency"
    );
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("clean up effect");
    };
  }, [resourceType]);
  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <div>{resourceType}</div>
      {data.map((item) => {
        return <div key={item.id}>{JSON.stringify(item)}</div>;
      })}
    </div>
  );
}
