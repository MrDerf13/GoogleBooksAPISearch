import styles from "./BookCard.module.scss";

const BookCard = ({
  id,
  image,
  author,
  title,
  description,
  setBookID,
  setShowModal,
}) => {
  const coverDescription =
    description !== undefined
      ? `${description.slice(0, description.indexOf(" ", 100))}...`
      : "Description Not Found";

  return (
    <div className={styles.card}>
      <img src={image} alt="book-cover" />
      <h3>Title: {title}</h3>
      <h4>Author: {author}</h4>
      <p>{coverDescription}</p>
      <button
        onClick={() => {
          setBookID({ id });
          setShowModal(true);
        }}
      >
        See more
      </button>
      {/* ASPIRATIONAL - animate the book flipping over and having the full description on the back*/}
    </div>
  );
};

export default BookCard;
