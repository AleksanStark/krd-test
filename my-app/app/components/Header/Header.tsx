import css from "./Header.module.css";
const Header = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.header_list}>{children}</ul>
      </nav>
    </header>
  );
};

export default Header;
