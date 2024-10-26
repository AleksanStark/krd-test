import Link from "next/link";
import Header from "../components/Header/Header";
import PostsList from "../components/PostsList/PostsList";

const PlasticSurgey = () => {
  return (
    <>
      <Header>
        <li>
          <Link href={"/"}>На главную страницу</Link>
        </li>
        <li>
          <Link href={"/plasticSurgey"}>Посты</Link>
        </li>
        <li>
          <Link href={"/plasticSurgey/form"}>Создать Пост</Link>
        </li>
      </Header>
      <main>
        <PostsList category="пластическая хирургия" />
      </main>
    </>
  );
};
export default PlasticSurgey;
