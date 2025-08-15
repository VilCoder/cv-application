import { useState } from "react";
import { Button, Form, TextInput } from "./Form";
import { initialSkill } from "../logic/constants";

let nextId = 0;

export function SkillForm({ skillData, onAdd, onRemove }) {
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
      <TextInput
        label="Skill"
        name="skill"
        value={skill.skill}
        placeholder="Enter your skill"
        onChange={handleChange}
      />

      <Button />

      {skillData.length > 0 && (
        <>
          <h3 className="education__list--title">Habilidad Resgistrada</h3>
          <ul className="education__list--ul">
            {skillData.map((sk) => (
              <li className="education__list--item" key={sk.id}>
                <span>{sk.skill}</span>{" "}
                <button
                  className="item__remove"
                  type="button"
                  onClick={() => onRemove(sk.id)}
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
