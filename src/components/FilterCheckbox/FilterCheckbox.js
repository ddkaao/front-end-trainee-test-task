import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ booksFilter, handleFilterChange }) {
    return (
        <label className="filter">
            <input type="checkbox" className="filter__checkbox" value={booksFilter} checked={booksFilter} onChange={handleFilterChange} />
            <span className="filter__toggle"></span>
            <span className="filter__caption"> По возрастанию страниц</span>
        </label>
    )
}