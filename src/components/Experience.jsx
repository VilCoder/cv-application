import { useState } from "react";
import { Form } from "./Form";
import { initialExperience } from "../logic/constants";

export function Experience({ experienceData, onAdd, onRemove }) {
  const [experience, setExperience] = useState(initialExperience);

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearFields = () => {
    setExperience({
      company: "",
      job: "",
      address: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...experience });
    handleClearFields();
  };

  return (
    <Form title="Experiencia Profesional" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="company">
        Company Name *
        <input
          className="form__input"
          type="text"
          id="company"
          name="company"
          value={experience.company}
          autoComplete="organization"
          maxLength={60}
          pattern="^[^0-9]+$"
          required
          placeholder="MGB TECHNOLOGY S.A.S"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="job">
        Job Title *
        <input
          className="form__input"
          type="text"
          id="job"
          name="job"
          value={experience.job}
          autoComplete="job-title"
          maxLength={60}
          placeholder="Software Developer"
          required
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="address">
        Location *
        <input
          className="form__input"
          type="tel"
          id="address"
          name="address"
          value={experience.address}
          autoComplete="street-address"
          maxLength={60}
          required
          placeholder="City, Country"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="startDate">
        Start Date *
        <input
          className="form__input"
          type="month"
          id="startDate"
          name="startDate"
          value={experience.startDate}
          autoComplete="off"
          pattern="^\d{2}-\d{2}-\d{4}$"
          required
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="endDate">
        End Date *
        <input
          className="form__input"
          type="month"
          id="endDate"
          name="endDate"
          value={experience.endDate}
          autoComplete="off"
          pattern="^\d{2}-\d{2}-\d{4}$"
          required
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="description">
        Description *
        <textarea
          className="form__textarea"
          name="description"
          id="description"
          value={experience.description}
          autoComplete="off"
          rows={3}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          required
          placeholder="Describe your professional experience..."
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit" className="form__button form__button--save">
        Save
      </button>

      {experienceData.length > 0 && (
        <>
          <h3 className="education__list--title">Experiencia Registrada</h3>
          <ul className="education__list--ul">
            {experienceData.map((ex) => (
              <li className="education__list--item" key={ex.experience}>
                <span>{ex.company}</span>{" "}
                <button
                  className="item__remove"
                  type="button"
                  onClick={() => onRemove(ex.id)}
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
