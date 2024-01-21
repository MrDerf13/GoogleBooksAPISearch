import { useState } from "react";
import "./App.scss";
import SearchForm from "./containers/SearchForm/SearchForm";
import BookContainer from "./containers/BookContainer/BookContainer";
import Header from "./containers/Header/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  return (
    <>
      <Header />
      <SearchForm
        setSearchTerm={setSearchTerm}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setPublisher={setPublisher}
      />
      <BookContainer
        searchTerm={searchTerm}
        title={title}
        author={author}
        publisher={publisher}
      />
    </>
  );
}

export default App;
