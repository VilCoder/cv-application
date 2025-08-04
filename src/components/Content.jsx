export function Content({ personData}) {
  return (
    <article className="container__content">
      <h1 className="content__title">{personData.fullname}</h1>

      <div className="content__info">
        <span className="info__location">{personData.address}</span>
        <span role="presentation">.</span>
        <span className="info__phone">{personData.phone}</span>
        <span role="presentation">.</span>
        <span className="info__email">{personData.email}</span>
      </div>

      <p className="content__description">
        {personData.aboutMe || "No description provided."}
      </p>

      <section className="content__experience">
        <h2 className="experience__title">EXPERIENCIA PROFESIONAL</h2>
        <p className="experience__job">
          <span><strong>{personData.company}</strong></span>
          <span>{personData.job}</span>
        </p>
        <p className="experience__location">
          <span>{personData.companyAddress}</span>
          <span>{personData.experienceStart}-{personData.experienceEnd}</span>
        </p>
        <ul className="experience__list">
          <li>Desarrollé y mantuve aplicaciones web utilizando React y Node.js.</li>
        </ul>
      </section>

      <section className="content__education">
        <h2 className="education__title">EDUCACIÓN</h2>
        <p className="education__item">
          <span><strong>{personData.schoolName}</strong></span>
          <span>{personData.degree}</span>
        </p>
        <p className="education__location">
          <span>{personData.schoolAddress}</span>
          <span>Noviembre 2023</span>
        </p>
        <p className="education__item">
          <span><strong>{personData.schoolName}</strong></span>
          <span>{personData.degree}</span>
        </p>
        <p className="education__location">
          <span>{personData.schoolAddress}</span>
          <span>Diciembre 2021</span>
        </p>
      </section>

      <section className="content__skills">
        <h2 className="skills__title">SKILLS</h2>
        <ul className="skills__list">
          <li className="skills__item">Python</li>
          <li className="skills__item">HTML5</li>
          <li className="skills__item">CSS3</li>
          <li className="skills__item">JavaScript</li>
          <li className="skills__item">Git y Github</li>
          <li className="skills__item">MySQL</li>
          <li className="skills__item">React</li>
          <li className="skills__item">Node.js</li>
        </ul>
      </section>
    </article>
  );
}
