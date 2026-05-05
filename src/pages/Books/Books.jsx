import Flipbook from "../../components/Flipbook/Flipbook.jsx";
import { books } from "../../content/books.js";
import "./Books.css";

export default function Books() {
  return (
    <div className="page books">
      <div className="container books__inner">
        {books.map((book) => (
          <section key={book.slug} id={book.slug} className="books__section">
            <header className="books__head">
              <h2 className="books__title">{book.title}</h2>
              {book.subtitle && (
                <p className="books__subtitle">{book.subtitle}</p>
              )}
            </header>
            <Flipbook pages={book.pages} />
          </section>
        ))}
      </div>
    </div>
  );
}
