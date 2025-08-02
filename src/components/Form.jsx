export function Form({ title, children }) {
  return (
    <section className="container__form">
      <h2 className="form__title">{title}</h2>
      <form className="form" onSubmit={(e) => e.preventDefault}>
        {children}
      </form>
    </section>
  );
}
