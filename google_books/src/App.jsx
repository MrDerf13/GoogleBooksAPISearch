import { useState } from "react";
import "./App.scss";
import SearchForm from "./containers/SearchForm/SearchForm";
import BookContainer from "./containers/BookContainer/BookContainer";
import Header from "./containers/Header/Header";
import basicSearch from "./data/apiDataFunctions";

function App() {
  const [searchTerm, setSearchTerm] = useState({
    general: "",
    title: "",
    author: "",
  });

  console.log(basicSearch("flowers"));

  return (
    <>
      <Header />
      <SearchForm setSearchTerm={setSearchTerm} />
      <BookContainer searchTerm={searchTerm} />
    </>
  );
}

export default App;
