import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";

const SearchForm = (setSearchTerm) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Either one on start up or if Advanced Search is clicked we want many searches */}
      <Search id="general" />
      <Button />
    </form>
  );
};

export default SearchForm;
