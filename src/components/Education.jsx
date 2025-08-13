import { useState } from "react";
import { Form } from "./Form";
import { initialEducation } from "../logic/constants";

export function Education({ educationData, onAdd, onRemove }) {
  const [education, setEducation] = useState(initialEducation);

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearFields = () => {
    setEducation({
      school: "",
      degree: "",
      address: "",
      degreeDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...education });
    handleClearFields();
  };

  return (
    <Form title="Educación" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="school">
        School Name *
        <input
          className="form__input"
          type="text"
          id="school"
          name="school"
          value={education.school}
          autoComplete="organization"
          maxLength={40}
          required
          placeholder="MINISTERIO TIC"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="degree">
        Degree *
        <input
          className="form__input"
          type="text"
          id="degree"
          name="degree"
          value={education.degree}
          autoComplete="off"
          required
          maxLength={60}
          placeholder="Desarrollo de Software y de Aplicaciones Web"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="address">
        Location *
        <input
          className="form__input"
          type="text"
          id="address"
          name="address"
          value={education.address}
          autoComplete="street-address"
          maxLength={60}
          required
          placeholder="City, Country"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="degreeDate">
        Degree Date *
        <input
          className="form__input"
          type="month"
          id="degreeDate"
          name="degreeDate"
          value={education.degreeDate}
          autoComplete="off"
          pattern="^\d{2}-\d{2}-\d{4}$"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="form__button form__button--save">
        Save
      </button>

      {educationData.length > 0 && (
        <>
          <h3 className="education__list--title">Educación Registrada</h3>
          <ul className="education__list--ul">
            {educationData.map((ed) => (
              <li className="education__list--item" key={ed.education}>
                <span>{ed.school}</span>{" "}
                <button
                  className="item__remove"
                  type="button"
                  onClick={() => onRemove(ed.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </Form>
  );
}
