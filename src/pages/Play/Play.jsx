import PlayGroup from "../../components/PlayGroup/PlayGroup.jsx";
import Flipbook from "../../components/Flipbook/Flipbook.jsx";
import PageHead from "../../components/PageHead/PageHead.jsx";
import { playGroups } from "../../content/playGroups.js";
import { books } from "../../content/books.js";
import "./Play.css";
import "../Books/Books.css";

const group = (id) => playGroups.find((g) => g.id === id);

export default function Play() {
  return (
    <div className="page play">
      <PageHead
        index="03"
        title="(Play)"
        note="sketches, experiments & picture books"
      />
      <div className="container play__inner">
        <PlayGroup {...group("03")} label="01" />
        {books.map((book) => (
          <section key={book.slug} id={book.slug} className="books__section">
            <header className="books__head">
              <h2 className="books__title">{book.title}</h2>
              {book.subtitle && (
                <p className="books__subtitle">{book.subtitle}</p>
              )}
            </header>
            <Flipbook pages={book.pages} pageAspect={book.pageAspect} />
          </section>
        ))}
        <PlayGroup {...group("02")} label="02" />
        <PlayGroup {...group("04")} label="03" />
        <PlayGroup {...group("01")} label="04" />
      </div>
    </div>
  );
}
