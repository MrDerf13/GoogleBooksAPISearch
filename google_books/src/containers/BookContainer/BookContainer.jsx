import { useEffect, useState } from "react";
import basicSearch from "../../data/apiDataFunctions";
import BookCard from "../../components/BookCard/BookCard";
import styles from "./BookContainer.module.scss";

const BookContainer = ({ searchTerm, title, author, publisher }) => {
  // This is where the API call will happen based on the searchTerm
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bookID, setBookID] = useState(NaN);
  const [bookData, setBookData] = useState();
  // state to determine which "page" you're on

  useEffect(() => {
    setLoading(true);

    basicSearch(searchTerm, title, author, publisher)
      .then((res) => {
        console.log("working");
        setBookList(res);
      })
      // .catch((e) => console.log(e))
      .finally(setLoading(false));
    // console.log(bookList);
  }, [searchTerm, title, author, publisher]);

  useEffect(() => {
    if (bookID === "") {
      return;
    } else {
      setBookData(bookList[bookID.id]);
      console.log(bookData);
    }
  }, [showModal]);

  return (
    <div className={styles.container}>
      {/* add a page number with arrows to increment/decrement the page number <-- num --> */}
      {loading && <p>Loading...</p>}
      {bookList &&
        bookList.map((book, index) => (
          <BookCard
            key={index}
            id={index}
            title={book.title}
            author={book.author}
            description={book.description}
            image={
              book.imageLarge ? book.imageLarge : "src/assets/bookcovernf.png"
            }
            setBookID={setBookID}
            setShowModal={setShowModal}
          />
        ))}
      {/* dialog here, render based on bookID */}
      <dialog open={showModal} className={styles.modal}>
        {showModal && <h1>{bookData.title}</h1>}
        {showModal && <h3>{bookData.subtitle}</h3>}
        {showModal && <h2>{bookData.author}</h2>}
        {showModal && <p>Published by: {bookData.publisher}</p>}
        {showModal && <p>Published On: {bookData.publishedDate}</p>}
        {showModal && <img src={bookData.imageLarge} alt="book cover" />}
        {showModal && <p>{bookData.description}</p>}
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          See Less
        </button>
      </dialog>
    </div>
  );
};

export default BookContainer;
