import React from "react";
import './Table.css'; 

export default function Table({ booksReceived }) {
    return (
        <section className="table">
            <div className="table__container">
                {booksReceived.length !== 0 ? (
                    <table className="table__content">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Название</th>
                                <th>Обложка</th>
                                <th>Дата выпуска</th>
                                <th>Количество страниц</th>
                                <th>Описание</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booksReceived.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <img
                                            className="table__img"
                                            src={item.cover}
                                            alt={item.title}
                                        />
                                    </td>
                                    <td>{item.releaseDate}</td>
                                    <td>{item.pages}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Ничего не найдено</p>
                )}
            </div>
        </section>
    );
}
