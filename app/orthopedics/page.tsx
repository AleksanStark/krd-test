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
          <Link href={"/orthopedics"}>Посты</Link>
        </li>
        <li>
          <Link href={"/orthopedics/form"}>Создать Пост</Link>
        </li>
      </Header>
      <main>
        <PostsList category="ортопедия" />
      </main>
    </>
  );
};
export default orthopedics;
