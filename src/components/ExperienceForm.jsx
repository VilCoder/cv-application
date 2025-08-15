import { useState } from "react";
import { Button, Form, Textarea, TextInput } from "./Form";
import { initialExperience } from "../logic/constants";

let nextId = 0;

export function ExperienceForm({ experienceData, onAdd, onRemove }) {
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
      address__company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...experience, id: nextId++ });
    handleClearFields();
  };

  return (
    <Form title="Experiencia Profesional" onSubmit={handleSubmit}>
      <TextInput
        label="Company Name"
        name="company"
        value={experience.company}
        placeholder="MGB TECHNOLOGY S.A.S"
        onChange={handleChange}
        autoComplete="organization"
        maxLength={60}
      />

      <TextInput
        label="Job Title"
        name="job"
        value={experience.job}
        placeholder="Software Developer"
        onChange={handleChange}
        autoComplete="job-title"
        maxLength={60}
      />

      <TextInput
        label="Location"
        name="address__company"
        value={experience.address__company}
        placeholder="City, Country"
        onChange={handleChange}
        autoComplete="street-address"
        maxLength={60}
      />

      <TextInput
        label="Start Date"
        name="startDate"
        value={experience.startDate}
        onChange={handleChange}
        type="month"
      />

      <TextInput
        label="End Date"
        name="endDate"
        value={experience.endDate}
        onChange={handleChange}
        type="month"
      />

      <Textarea
        label="Description"
        name="description"
        value={experience.description}
        placeholder="Describe your professional experience..."
        onChange={handleChange}
      />

      <Button />

      {experienceData.length > 0 && (
        <>
          <h3 className="education__list--title">Experiencia Registrada</h3>
          <ul className="education__list--ul">
            {experienceData.map((ex) => (
              <li className="education__list--item" key={ex.id}>
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
