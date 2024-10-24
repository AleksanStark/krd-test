import { Api, Post } from "@/types/types";
import css from "./PostsList.module.css";

const PostsList = async ({ category }: Api) => {
  const res = await fetch(
    `https://krd-test-back.onrender.com/posts?category=${category}`
  );
  const {
    data: { posts },
  } = await res.json();
  return (
    <ul className={css.list}>
      {posts &&
        posts.map((item: Post) => (
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
