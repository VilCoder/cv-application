import { useState } from "react";
import { Form } from "./Form";

export function Experience({ onAdd }) {
  const [experience, setExperience] = useState({
    company: "",
    jobTitle: "",
    address: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  
  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form title="Experience">
      <label className="form__label" htmlFor="company">
        Company Name *
        <input
          className="form__input"
          type="text"
          id="company"
          name="company"
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
          autoComplete="organization-title"
          maxLength={60}
          pattern="^[A-Za-z]+$"
          placeholder="Software Developer"
          required
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="companyAddress">
        Location *
        <input
          className="form__input"
          type="tel"
          id="companyAddress"
          name="companyAddress"
          autoComplete="address"
          maxLength={60}
          required
          placeholder="City, Country"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="experienceStart">
        Start Date *
        <input
          className="form__input"
          type="date"
          id="experienceStart"
          name="experienceStart"
          autoComplete="off"
          pattern="^\d{2}-\d{2}-\d{4}$"
          required
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="experienceEnd">
        End Date *
        <input
          className="form__input"
          type="date"
          id="experienceEnd"
          name="experienceEnd"
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
          // value={experience}
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
        <button
          type="button"
          className="label__button"
          // disabled={!experience}
          onClick={() => onAdd(...experience)}
        >
          +
        </button>
      </label>
      <button type="submit" className="form__button form__button--save">
        Save
      </button>
    </Form>
  );
}
