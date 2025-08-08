import { useState } from "react";
import { Form } from "./Form";
import { initialSkill } from "../constants";

let nextId = 0;

export function Skills({ skillData, onAdd, onRemove }) {
  const [skill, setSkill] = useState(initialSkill);

  const handleChange = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearField = () => {
    setSkill({
      skill: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...skill, id: nextId++ });
    handleClearField();
  };

  return (
    <Form title="Skills" onSubmit={handleSubmit} initialState={false}>
      <label className="form__label" htmlFor="skill">
        Skill *
        <input
          className="form__input"
          type="text"
          id="skill"
          name="skill"
          value={skill.skill}
          autoComplete="off"
          required
          pattern="^[a-zA-Z\s]+$"
          placeholder="Enter your skill"
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="form__button form__button--save">
        Save
      </button>

      {skillData.length > 0 && (
        <>
          <h3 className="education__list--title">Registered education</h3>
          <ul className="education__list--ul">
            {skillData.map((sk) => (
              <li className="education__list--item" key={sk.id}>
                <span>{sk.skill}</span>{" "}
                <button type="button" onClick={() => onRemove(sk.id)}>
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
