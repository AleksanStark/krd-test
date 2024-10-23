import Link from "next/link";
import Header from "./components/Header/Header";
import PostsList from "./components/PostsList/PostsList";

const Home = () => {
  return (
    <div>
      <Header>
        <li>
          <Link href={"/form"}>Создать пост</Link>
        </li>
        <li>
          <Link href={"/"}>Посты</Link>
        </li>
      </Header>
      <PostsList category="orthopedics" />
    </div>
  );
};

export default Home;
