import "./Hero.css";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "default",
  children,
}) {
  return (
    <section className={`hero hero--${align} hero--${size}`}>
      <div className="container">
        {eyebrow && <p className="eyebrow hero__eyebrow">{eyebrow}</p>}
        {title && <h1 className="hero__title">{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
