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
    setBookData(bookList[bookID.id]);
  }, [showModal]);

  useEffect(() => {
    setLoading(true);

    basicSearch(searchTerm, title, author, publisher)
      .then((res) => {
        setBookList(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm, title, author, publisher]);

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
        {showModal && bookData && <h1>{bookData.title}</h1>}
        {showModal && bookData && <h3>{bookData.subtitle}</h3>}
        {showModal && bookData && <h2>{bookData.author}</h2>}
        {showModal && bookData && <p>Published by: {bookData.publisher}</p>}
        {showModal && bookData && <p>Published On: {bookData.publishedDate}</p>}
        {showModal && bookData && (
          <img src={bookData.imageLarge} alt="book cover" />
        )}
        {showModal && bookData && <p>{bookData.description}</p>}

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
