import { format } from "date-fns";
import { es } from "date-fns/locale";

export function Content({ personData }) {
  // const experienceStartDate = personData.experience[0].start
  //   ? format(new Date(personData.experience[0].start), "MMMM yyyy", {
  //       locale: es,
  //     })
  //   : "Start Date";

  // const experienceEndDate = personData.experience[0].end
  //   ? format(new Date(personData.experience[0].end), "MMMM yyyy", {
  //       locale: es,
  //     })
  //   : "End Date";

  // const formattedDegreeDate = personData.education[0].date
  //   ? format(new Date(personData.education[0].date), "MMMM yyyy", {
  //       locale: es,
  //     })
  //   : "Degree Date";

  // console.log(personData.experience[0].description);
    
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
          <span>
            <strong>{}</strong>
          </span>
          <span>{}</span>
        </p>
        <p className="experience__location">
          <span>{}</span>
          <span>
            {}-{}
          </span>
        </p>
        <ul className="experience__list">
          <li>
            Desarrollé y mantuve aplicaciones web utilizando React y Node.js.
          </li>
        </ul>
      </section>

      <section className="content__education">
        <h2 className="education__title">EDUCACIÓN</h2>
        <p className="education__item">
          <span>
            <strong>{}</strong>
          </span>
          <span>{}</span>
        </p>
        <p className="education__location">
          <span>{}</span>
          <span>{}</span>
        </p>
        <p className="education__item">
          <span>
            <strong>{}</strong>
          </span>
          <span>{}</span>
        </p>
        <p className="education__location">
          <span>{}</span>
          <span>{}</span>
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
