import { formatDateUI } from "../logic/dateFormatter";

export function Content({
  personData,
  experienceData,
  educationData,
  skillData,
}) {
  return (
    <article className="container__content">
      <h1 className="content__title">{personData.fullname || "John Doe"}</h1>

      <div className="content__info">
        <span className="info__location">{personData.address || "City, Country"}</span>
        <span role="presentation" className="info__separator"></span>
        <span className="info__phone">{personData.phone || "3005178089"}</span>
        <span role="presentation" className="info__separator"></span>
        <span className="info__email">{personData.email || "johndoe@example.com"}</span>
      </div>

      <p className="content__description">
        {personData.aboutMe || "No description provided."}
      </p>

      <section className="content__experience">
        <h2 className="experience__title">EXPERIENCIA PROFESIONAL</h2>
        {experienceData.length > 0 ? (
          experienceData.map(
            (exp, index) => (
              (
                <div key={index} className="experience__item">
                  <p className="experience__job">
                    <span>
                      <strong>{exp.company}</strong>
                    </span>
                    <span>{exp.job}</span>
                  </p>
                  <p className="experience__location">
                    <span>{exp.address__company}</span>
                    <span>
                      {formatDateUI(exp.startDate)}-{formatDateUI(exp.endDate)}
                    </span>
                  </p>
                  <ul className="experience__list">
                    {exp.description.split("\n").map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </div>
              )
            )
          )
        ) : (
          <div className="experience__item">
            <p className="experience__job">
              <span>
                <strong>Company Name</strong>
              </span>
              <span>Job Title</span>
            </p>
            <p className="experience__location">
              <span>City, Country</span>
              <span>StartDate-endDate</span>
            </p>
            <ul className="experience__list">
              <li>
                Desarrollé y mantuve aplicaciones web utilizando React y
                Node.js.
              </li>
            </ul>
          </div>
        )}
      </section>

      <section className="content__education">
        <h2 className="education__title">EDUCACIÓN</h2>
        {educationData.length > 0 ? (
          educationData.map((edu, index) => (
            <div key={index} className="education__item">
              <p className="education__info">
                <span>
                  <strong>{edu.school}</strong>
                </span>
                <span>{edu.degree}</span>
              </p>
              <p className="education__location">
                <span>{edu.address__school}</span>
                <span>{formatDateUI(edu.degreeDate)}</span>
              </p>
            </div>
          ))
        ) : (
          <div className="education__item">
            <p className="education__info">
              <span>
                <strong>School Name</strong>
              </span>
              <span>Degree</span>
            </p>
            <p className="education__location">
              <span>City, Country</span>
              <span>Degree Date</span>
            </p>
          </div>
        )}
      </section>

      <section className="content__skills">
        <h2 className="skills__title">SKILLS ADICIONALES</h2>
        <ul className="skills__list">
          {skillData.length > 0 ? (
            skillData.map((sk) => (
              <li key={sk.skill} className="skills__item">
                {sk.skill}
              </li>
            ))
          ) : (
            <li className="skills__item">CSS3</li>
          )}
        </ul>
      </section>
    </article>
  );
}
