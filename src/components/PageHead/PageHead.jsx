import "./PageHead.css";

// Poster-style page masthead: № index, huge title, mono note, thick rule.
export default function PageHead({ index, title, note }) {
  return (
    <header className="page-head">
      <div className="container page-head__inner">
        <div>
          {index && <p className="eyebrow page-head__index">№ {index}</p>}
          <h1 className="page-head__title">{title}</h1>
        </div>
        {note && <p className="page-head__note">[ {note} ]</p>}
      </div>
    </header>
  );
}
