import { useState } from "react";

export function Form({ title, children }) {
  const [showIcon, setShowIcon] = useState(false);
  const handleToggle = () => {
    setShowIcon(!showIcon);
  };

  return (
    <section className="container__form">
      <h2 className="form__title">{title}</h2>

      <button type="button" className="form__button" onClick={handleToggle}>
        <svg
          style={{ display: showIcon ? "block" : "none" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,14L12,9L7,14H17Z" />
        </svg>

        <svg
          style={{ display: showIcon ? "none" : "block" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
        </svg>
      </button>

      <form
        style={{ display: showIcon ? "block" : "none" }}
        className="form"
        onSubmit={(e) => e.preventDefault()}
      >
        {children}
      </form>
    </section>
  );
}
