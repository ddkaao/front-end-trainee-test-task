import React from "react";
import './SearchForm.css'; 
import search_icon from "../../images/search_btn.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ booksFilter, setBooksFilter, books, searchBooks, booksInputSearch }) {

    const [formSearch, setFormSearch] = React.useState('');

    function handleInputChange(evt) {
        setFormSearch(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        searchBooks(formSearch, books, booksFilter);
    }

    function handleFilterChange() {
        if (booksFilter) {
            setBooksFilter(false)
            searchBooks(booksInputSearch, books, false)
        } else {
            setBooksFilter(true)
            searchBooks(booksInputSearch, books, true)
        }
    }

    React.useEffect(() => {
        setFormSearch(booksInputSearch);
      }, [booksInputSearch, setFormSearch])

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" onSubmit={handleSubmit} noValidate>
                    <input className="search__input" type="text" placeholder="Книга" minLength="1" maxLength="32" value={formSearch} onChange={handleInputChange} required />
                    <button type="submit" className="search__btn-submit">
                        <img src={search_icon} alt="Ввод" />
                    </button>
                </form>
                <FilterCheckbox booksFilter={booksFilter} handleFilterChange={handleFilterChange} />
                <div className="search__line"></div>
            </div>
        </section>
    )
}