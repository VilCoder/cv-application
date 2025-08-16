import { useState } from "react";

export function TextInput({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = "text",
  autoComplete = "off",
  maxLength = 40,
}) {
  return (
    <label className="form__label" htmlFor={name}>
      {label} *
      <input
        className="form__input"
        type={type}
        id={name}
        name={name}
        value={value}
        maxLength={maxLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </label>
  );
}

export function Textarea({ label, name, value, placeholder, onChange }) {
  return (
    <label className="form__label" htmlFor={name}>
      {label} *
      <textarea
        className="form__textarea"
        name={name}
        id={name}
        value={value}
        autoComplete="off"
        required
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </label>
  );
}

export function Button() {
  return (
    <button type="submit" className="form__button form__button--save">
      Guardar
    </button>
  );
}

export function Form({ title, children, onSubmit, initialState = false }) {
  const [state, setState] = useState(initialState);

  const handleToggle = () => {
    setState(!state);
  };

  return (
    <section className="container__form">
      <h2 className="form__title">{title}</h2>

      <button
        aria-label="Toggle Menu"
        type="button"
        className="form__button form__button--toggle"
        onClick={handleToggle}
      >
        <svg
          aria-hidden="true"
          style={{ display: state ? "block" : "none" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,14L12,9L7,14H17Z" />
        </svg>

        <svg
          aria-hidden="true"
          style={{ display: state ? "none" : "block" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
        </svg>
      </button>

      <form
        style={{ display: state ? "block" : "none" }}
        className="form"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </section>
  );
}
