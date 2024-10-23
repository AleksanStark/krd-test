import Link from "next/link";
import Header from "../components/Header/Header";
import PostsList from "../components/PostsList/PostsList";

const Gynaecology = () => {
  return (
    <div>
      <Header>
        <li>
          <Link href={"/form"}>Создать пост</Link>
        </li>
        <li>
          <Link href={"/gynaecology"}>Посты</Link>
        </li>
      </Header>
      <PostsList category="gynaecology" />
    </div>
  );
};

export default Gynaecology;
