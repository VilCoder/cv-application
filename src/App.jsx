import { useState } from "react";
import "./App.css";

import { Content } from "./components/Content";
import { Form } from "./components/Form";
import { initialDataPerson } from "./constants";

function App() {
  const [person, setPerson] = useState(initialDataPerson);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })
  }

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
              autoComplete="name"
              maxLength={40}
              pattern="^[A-Za-z]+$"
              required
              placeholder="John Doe..."
              onChange={handleChange}
            />
          </label>
          <label className="form__label" htmlFor="address">
            Location
            <input
              className="form__input"
              type="text"
              id="address"
              name="address"
              autoComplete="address"
              maxLength={40}
              pattern="^[A-Za-z]+$"
              placeholder="City, Country"
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
            About Me
            <textarea
              className="form__textarea"
              id="aboutMe"
              name="aboutMe"
              autoComplete="off"
              rows={3}
              onInput={e => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              placeholder="Write a brief description about yourself..."
              onChange={handleChange}
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
              autoComplete="organization"
              maxLength={60}
              pattern="^[^0-9]+$"
              required
              placeholder="MGB TECHNOLOGY S.A.S"
              onChange={handleChange}
            />
          </label>
          <label className="form__label" htmlFor="job">
            Job Title
            <input
              className="form__input"
              type="text"
              id="job"
              name="job"
              autoComplete="organization-title"
              maxLength={60}
              pattern="^[A-Za-z]+$"
              placeholder="Software Developer"
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
              autoComplete="off"
              rows={3}
              onInput={e => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              placeholder="Describe your professional experience..."
              onChange={handleChange}
            ></textarea>
          </label>
        </Form>

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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>
        </Form>

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
              onChange={handleChange} 
            />
          </label>
        </Form>
      </aside>

      <main className="main__container">
        <Content personData={person} />
      </main>
    </>
  );
}

export default App;
