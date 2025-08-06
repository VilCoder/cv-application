import { Form } from "./Form";

export function Education() {
  return (
    <Form title="Education">
      <label className="form__label" htmlFor="schoolName">
        School Name *
        <input
          className="form__input"
          type="text"
          id="schoolName"
          name="schoolName"
          autoComplete="organization"
          maxLength={40}
          required
          placeholder="MINISTERIO TIC"
          // onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="degree">
        Degree *
        <input
          className="form__input"
          type="text"
          id="degree"
          name="degree"
          autoComplete="off"
          required
          maxLength={60}
          placeholder="Desarrollo de Software y de Aplicaciones Web"
          // onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="schoolAddress">
        Location *
        <input
          className="form__input"
          type="text"
          id="schoolAddress"
          name="schoolAddress"
          autoComplete="address"
          maxLength={60}
          required
          placeholder="City, Country"
          // onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="degreeDate">
        Degree Date *
        <input
          className="form__input"
          type="date"
          id="degreeDate"
          name="degreeDate"
          autoComplete="off"
          pattern="^\d{2}-\d{2}-\d{4}$"
          required
          // onChange={handleChange}
        />
      </label>
      <button type="submit" className="form__button form__button--save">
        Save
      </button>
    </Form>
  );
}
