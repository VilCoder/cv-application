export function Content() {
  return (
    <article className="container__content">
      <h1 className="content__title">Jan Carlos Viloria</h1>

      <div className="content__info">
        <span className="info__location">City, Country</span>
        <span role="presentation">.</span>
        <span className="info__phone">Phone</span>
        <span role="presentation">.</span>
        <span className="info__email">email</span>
      </div>

      <p className="content__description">
        Desarrollador de Software con 6 meses de experiencia en automatización
        de procesos y desarrollo de aplicaciones web escalables y de alto
        rendimiento. Con conocimiento en tecnologías (Python, HTML5, CSS3,
        JavaScript, Git y Github, MySQL, React, Node.js). Comprometido con la
        implementación de prácticas de desarrollo ágil para asegurar entregas
        continuas y de alta calidad. Hábil en la resolución de problemas y en la
        optimización de procesos existentes.
      </p>

      <section className="content__experience">
        <h2 className="experience__title">EXPERIENCIA PROFESIONAL</h2>
        <p className="experience__job">
          <span><strong>GBM COLOMBIA S.A.S</strong></span>
          <span>Software Technician</span>
        </p>
        <p className="experience__location">
          <span>Barranquilla, Colombia</span>
          <span>Marzo 2023-Septiembre 2023</span>
        </p>
        <ul className="experience__list">
          <li>Desarrollé y mantuve aplicaciones web utilizando React y Node.js.</li>
        </ul>
      </section>

      <section className="content__education">
        <h2 className="education__title">EDUCACIÓN</h2>
        <p className="education__item">
          <span><strong>CENTRO NACIONAL COLOMBO ALEMAN (SENA)</strong></span>
          <span>Técnico En Programación De Software.</span>
        </p>
        <p className="education__location">
          <span>Barranquilla, colombia</span>
          <span>Noviembre 2023</span>
        </p>
        <p className="education__item">
          <span><strong>MINISTERIO TIC</strong></span>
          <span>Desarrollo de Software y de Aplicaciones Web.</span>
        </p>
        <p className="education__location">
          <span>Barranquilla, colombia</span>
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
