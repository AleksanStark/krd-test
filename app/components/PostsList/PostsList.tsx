"use client";
import { Api, Post } from "@/types/types";
import css from "./PostsList.module.css";
import { useEffect, useState } from "react";

const PostsList = ({ category }: Api) => {
  const [posts, setPosts] = useState<Post[]>([]); // Указываем тип данных в useState

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `https://krd-test-back.onrender.com/posts?category=${category}`
      );
      const {
        data: { posts },
      } = await res.json();

      setPosts(posts);
      return posts;
    };

    fetchPosts(); // Вызываем fetchPosts один раз при монтировании
  }, [category]); // Следим за изменениями только в category

  return (
    <ul className={css.list}>
      {posts.map((item) => (
        <li className={css.list_item} key={item._id}>
          <h2>{item.name}</h2>
          <h3>{item.subject}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default PostsList;
