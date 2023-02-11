import React, { useState } from "react";
import "./app.css";

const BookForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    ISBN: ""
  });
  const [books, setBooks] = useState([]);

  const handleChange = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBooks([...books, book]);
    setBook({
      title: "",
      author: "",
      ISBN: ""
    });
  };

  const handleDelete = index => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleRemoveAll = () => {
    setBooks([]);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ISBN"
          name="ISBN"
          value={book.ISBN}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Book Records</h3>
      <ul>
        {books.map((b, index) => (
          <li key={index}>
            Title: {b.title} | Author: {b.author} | ISBN: {b.ISBN}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleRemoveAll}>Remove All</button>
    </div>
  );
};

export default BookForm;
