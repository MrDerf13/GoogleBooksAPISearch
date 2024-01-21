import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import { useRef, useState } from "react";
import styles from "./SearchForm.module.scss";

const SearchForm = ({ setSearchTerm, setTitle, setAuthor, setPublisher }) => {
  const formRef = useRef(null);
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const dataToSendToBackend = Object.fromEntries(formData);
    console.log(dataToSendToBackend);
    setTitle(dataToSendToBackend.title);
    setAuthor(dataToSendToBackend.author);
    setPublisher(dataToSendToBackend.publisher);
    setSearchTerm(dataToSendToBackend.general);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className={styles.searchForm}>
      {/* Either one on start up or if Advanced Search is clicked we want many searches */}
      {/* return to one OR the other, not general + details*/}
      {!isAdvanced && <Search id="general" label="General Search: " />}
      {isAdvanced && (
        <>
          <Search id="title" label="Title: " />
          <Search id="author" label="Author: " />
          <Search id="publisher" label="Publisher: " />
        </>
      )}
      <div>
        <button onClick={() => setIsAdvanced(!isAdvanced)}>
          {isAdvanced ? "Hide Advanced" : "Show Advanced"}
        </button>
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default SearchForm;
