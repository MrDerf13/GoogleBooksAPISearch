const basicSearch = async (searchTerm) => {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm
  );
  // image, author, title, description
  const basicData = await response.json();
  const cleanedData = basicData.items.map((book) => {
    const cleanBookData = {
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      author: book.volumeInfo.authors,
      description: book.description,
      imageSmall: book.volumeInfo.imageLinks.smallThumbnail,
      imageLarge: book.volumeInfo.imageLinks.thumbnail,
      publisher: book.publisher,
      publishedDate: book.publishedDate,
    };
    return cleanBookData;
  });
  return cleanedData;
};

export default basicSearch;
