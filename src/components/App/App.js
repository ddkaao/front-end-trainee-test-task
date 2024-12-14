import React from "react";
import './App.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import SearchForm from '../SearchFrom/SearchForm';
import Table from '../Table/Table';
import booksApi from '../../utils/BooksApi';

function App() {

  const [books, setBooks] = React.useState([]);
  const [booksReceived, setBooksReceived] = React.useState([]);
  const [booksInputSearch, setBooksInputSearch] = React.useState("");
  const [booksFilter, setBooksFilter] = React.useState(false);

  const searchBooks = React.useCallback((inputSearch, books, booksFilter) => {
    setBooksInputSearch(inputSearch);
    let filteredBooks = books.filter((book) => 
      book.title.toLowerCase().includes(inputSearch.toLowerCase())
    );

    if (booksFilter) {
      filteredBooks = filteredBooks.sort((a, b) => a.pages - b.pages);
    }

    setBooksReceived(filteredBooks);
  }, []);

  function getBooks() {
    booksApi.getBooks()
      .then((res) => {
        setBooksFilter(false);
        setBooksReceived(res);
        setBooks(res);
      })
      .catch(error => console.error('Ошибка:', error));
};

  React.useEffect(() => {
    getBooks();
  }, []);


  return (
    <div className="page">
      <div className="App">
        <Header />
        <SearchForm booksFilter={booksFilter} setBooksFilter={setBooksFilter} books={books} searchBooks={searchBooks} booksInputSearch={booksInputSearch}/>
        <Table booksReceived={booksReceived} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
