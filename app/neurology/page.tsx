import Link from "next/link";
import Header from "../components/Header/Header";
import PostsList from "../components/PostsList/PostsList";

const neurology = () => {
  return (
    <>
      <Header>
        <li>
          <Link href={"/"}>На главную страницу</Link>
        </li>
        <li>
          <Link href={"/neurology"}>Посты</Link>
        </li>
        <li>
          <Link href={"/neurology/form"}>Создать Пост</Link>
        </li>
      </Header>
      <main>
        <PostsList category="неврология" />
      </main>
    </>
  );
};
export default neurology;
