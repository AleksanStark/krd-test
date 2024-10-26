import Link from "next/link";
import Header from "../components/Header/Header";
import PostsList from "../components/PostsList/PostsList";

const orthopedics = () => {
  return (
    <>
      <Header>
        <li>
          <Link href={"/"}>На главную страницу</Link>
        </li>
        <li>
          <Link href={"/dermatology"}>Посты</Link>
        </li>
        <li>
          <Link href={"/dermatology/form"}>Создать Пост</Link>
        </li>
      </Header>
      <main>
        <PostsList category="дерматология" />
      </main>
    </>
  );
};
export default orthopedics;
