import { Form } from "./Form";

export function Skills() {
  return (
    <Form title="Skills">
      <label className="form__label" htmlFor="skill">
        Skill
        <input
          className="form__input"
          type="text"
          id="skill"
          name="skill"
          autoComplete="off"
          pattern="^[a-zA-Z\s]+$"
          placeholder="Enter your skill"
          // onChange={handleChange}
        />
      </label>
      <button type="submit" className="form__button form__button--save">
        Save
      </button>
    </Form>
  );
}
