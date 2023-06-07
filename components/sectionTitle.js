import React, { useEffect, useState } from "react";
import Container from "./container";
import axios from "axios";
import { apiUrl } from "../pages/api/config";

const SectionTitle = (props) => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    axios.get(apiUrl + "/hero/647f0d4a5134e5662521c1a2").then((response) => {
      setPosts(response.data);
      // console.log("posts :>> ", response.data);
    });
  }, []);

  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {/* {props.pretitle} */}
          {posts.Headline}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {/* {props.title} */}
          {posts.Headline}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {/* {props.children} */}
          {posts.Description}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;
