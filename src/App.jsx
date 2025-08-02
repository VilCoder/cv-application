import "./App.css";

import { Content } from "./components/Content";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <aside className="aside__container">
        <Form title="Personal Details">
          <label className="form__label" htmlFor="fullname">
            Full Name *
            <input
              className="form__input"
              type="text"
              id="fullname"
              name="fullname"
              maxLength={40}
              pattern="^[A-Za-z]+$"
              required
            />
          </label>
          <label className="form__label" htmlFor="address">
            Address
            <input
              className="form__input"
              type="text"
              id="address"
              name="address"
              maxLength={40}
              pattern="^[A-Za-z]+$"
            />
          </label>
          <label className="form__label" htmlFor="phone">
            Phone *
            <input
              className="form__input"
              type="tel"
              id="phone"
              name="phone"
              maxLength={12}
              pattern="^\d{10,}$"
              required
            />
          </label>
          <label className="form__label" htmlFor="email">
            Full Name *
            <input
              className="form__input"
              type="email"
              id="email"
              name="email"
              maxLength={40}
              pattern="^\w*(\-\w)?(\.\w*)?@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$"
              required
            />
          </label>
          <label className="form__label" htmlFor="about__me">
            About Me
            <textarea
              className="form__textarea"
              name="about__me"
              id="about__me"
              rows={3}
              onInput={e => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            ></textarea>
          </label>
        </Form>

        <Form title="Experience">
          <label className="form__label" htmlFor="company">
            Company Name *
            <input
              className="form__input"
              type="text"
              id="company"
              name="company"
              maxLength={60}
              pattern="^[^0-9]+$"
              required
            />
          </label>
          <label className="form__label" htmlFor="job">
            Job Title
            <input
              className="form__input"
              type="text"
              id="job"
              name="job"
              maxLength={60}
              pattern="^[A-Za-z]+$"
            />
          </label>
          <label className="form__label" htmlFor="address__company">
            Address *
            <input
              className="form__input"
              type="tel"
              id="address__company"
              name="address__company"
              maxLength={60}
              required
            />
          </label>
          <label className="form__label" htmlFor="experience__start">
            Start Date *
            <input
              className="form__input"
              type="date"
              id="experience__start"
              name="experience__start"
              pattern="^\d{2}-\d{2}-\d{4}$"
              required
            />
          </label>
          <label className="form__label" htmlFor="experience__end">
            End Date *
            <input
              className="form__input"
              type="date"
              id="experience__end"
              name="experience__end"
              pattern="^\d{2}-\d{2}-\d{4}$"
              required
            />
          </label>
          <label className="form__label" htmlFor="description">
            Description *
            <textarea
              className="form__textarea"
              name="description"
              id="description"
              rows={3}
              onInput={e => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            ></textarea>
          </label>
        </Form>

        <Form title="Education">
          <label className="form__label" htmlFor="school__name">
            School Name *
            <input
              className="form__input"
              type="text"
              id="school__name"
              name="school__name"
              maxLength={40}
              required
            />
          </label>
          <label className="form__label" htmlFor="degree">
            Degree *
            <input
              className="form__input"
              type="text"
              id="degree"
              name="degree"
              required
            />
          </label>
          <label className="form__label" htmlFor="education__start">
            Start Date *
            <input
              className="form__input"
              type="date"
              id="education__start"
              name="education__start"
              pattern="^\d{2}-\d{2}-\d{4}$"
              required
            />
          </label>
          <label className="form__label" htmlFor="education__end">
            End Date *
            <input
              className="form__input"
              type="date"
              id="education__end"
              name="education__end"
              pattern="^\d{2}-\d{2}-\d{4}$"
              required
            />
          </label>
        </Form>

        <Form title="Skills">
          <label className="form__label" htmlFor="skill">
            End Date
            <input
              className="form__input"
              type="date"
              id="skill"
              name="skill"
            />
          </label>
        </Form>
      </aside>

      <main className="main__container">
        <Content />
      </main>
    </>
  );
}

export default App;
