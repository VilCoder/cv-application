import { useState } from "react";
import { Button, Form, TextInput } from "./Form";
import { initialEducation } from "../logic/constants";

let nextId = 0;

export function EducationForm({ educationData, onAdd, onRemove }) {
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
      address__school: "",
      degreeDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...education, id: nextId++ });
    handleClearFields();
  };

  return (
    <Form title="Educación" onSubmit={handleSubmit}>
      <TextInput
        label="School Name"
        name="school"
        value={education.school}
        autoComplete="organization"
        placeholder="MINISTERIO TIC"
        onChange={handleChange}
      />

      <TextInput
        label="Degree"
        name="degree"
        value={education.degree}
        placeholder="Desarrollo de Software y de Aplicaciones Web"
        onChange={handleChange}
        maxLength={60}
      />

      <TextInput
        label="Location"
        name="address__school"
        value={education.address__school}
        placeholder="City, Country"
        onChange={handleChange}
        autoComplete="street-address"
        maxLength={60}
      />

      <TextInput
        label="Degree Date"
        name="degreeDate"
        value={education.degreeDate}
        onChange={handleChange}
        type="month"
      />

      <Button />

      {educationData.length > 0 && (
        <>
          <h3 className="education__list--title">Educación Registrada</h3>
          <ul className="education__list--ul">
            {educationData.map((ed) => (
              <li className="education__list--item" key={ed.id}>
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
