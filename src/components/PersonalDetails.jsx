import { Form } from "./Form";

export function PersonalDetails({ handleChange }) {
  return (
    <Form title="Información Personal" initialState={true}>
      <label className="form__label" htmlFor="fullname">
        Full Name *
        <input
          className="form__input"
          type="text"
          id="fullname"
          name="fullname"
          autoComplete="name"
          maxLength={40}
          pattern="^[A-Za-z]+$"
          required
          placeholder="John Doe..."
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
          autoComplete="address"
          maxLength={40}
          pattern="^[A-Za-z]+$"
          placeholder="City, Country"
          required
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="phone">
        Phone *
        <input
          className="form__input"
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          maxLength={20}
          required
          placeholder="+1 234567890"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="email">
        Email *
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          maxLength={40}
          pattern="^\w*(\-\w)?(\.\w*)?@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$"
          required
          placeholder="johndoe@example.com"
          onChange={handleChange}
        />
      </label>
      <label className="form__label" htmlFor="aboutMe">
        About Me *
        <textarea
          className="form__textarea"
          id="aboutMe"
          name="aboutMe"
          autoComplete="off"
          rows={3}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          required
          placeholder="Write a brief description about yourself..."
          onChange={handleChange}
        ></textarea>
      </label>
    </Form>
  );
}
