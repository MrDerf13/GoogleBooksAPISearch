const basicSearch = async (
  searchTerm = "",
  title = "",
  author = "",
  publisher = "",
  resPerPg = 40
) => {
  const titleVal = title !== "" ? `+intitle:${title}` : ``;
  const authorVal = author !== "" ? `+inauthor:${author}` : ``;
  const publisherVal = publisher !== "" ? `+inpublisher:${publisher}` : ``;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${titleVal}${authorVal}${publisherVal}&maxResults=${resPerPg}`
  );
  // image, author, title, description
  const basicData = await response.json();
  // show a max 10 pages and warn, change max results to 20 use &startIndex=${page}
  const pages = Math.ceil(basicData.totalItems / resPerPg);

  const cleanedData = basicData.items?.map((book) => {
    const cleanBookData = {
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      author: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      imageSmall: book.volumeInfo.imageLinks?.smallThumbnail,
      imageLarge: book.volumeInfo.imageLinks?.thumbnail,
      publisher: book.volumeInfo.publisher,
      publishedDate: book.volumeInfo.publishedDate,
    };
    return cleanBookData;
  });
  return cleanedData;
};

export default basicSearch;
