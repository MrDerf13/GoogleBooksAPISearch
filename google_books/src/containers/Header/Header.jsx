import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <h1>Google Books</h1>
      <h3>a Fred Giannone Orchestration</h3>
      <p>
        Use the search bar to search for a general term in title, author, or
        description.
      </p>
      <p>Or, use the Advanced Search fields to get more specific.</p>
      <p>
        If you're using the advanced search please enter the full word you are
        looking for. E.g. "Flowers" rather than "Flow".
      </p>
    </header>
  );
};

export default Header;
