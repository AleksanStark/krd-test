import Link from "next/link";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";

export default function Home() {
  return (
    <div>
      <Header>
        <li>
          <Link href={"/"}>Посты</Link>
        </li>
        <li>
          <Link href={"/form"}>Создать Пост</Link>
        </li>
      </Header>
      <PostsList category="ортопедия" />
    </div>
  );
}
