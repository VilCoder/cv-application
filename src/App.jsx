import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./styles/App.css";

import { initialPersonDetails } from "./constants";
import { Content } from "./components/Content";
import { PersonalDetails } from "./components/PersonalDetails";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";

function App() {
  const [person, setPerson] = useState(initialPersonDetails);
  const [experienceList, setExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [skillList, setSkillList] = useState([]);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExperience = ({
    id,
    company,
    job,
    address,
    startDate,
    endDate,
    description,
  }) => {
    setExperienceList([
      { id, company, job, address, startDate, endDate, description },
      ...experienceList,
    ]);
  };

  const handleRemoveExperience = (experienceId) => {
    setExperienceList(experienceList.filter((ex) => ex.id !== experienceId));
  };

  const handleAddEducation = ({ id, school, degree, address, degreeDate }) => {
    setEducationList([
      { id, school, degree, address, degreeDate },
      ...educationList,
    ]);
  };

  const handleRemoveEducation = (educationId) => {
    setEducationList(educationList.filter((ed) => ed.id !== educationId));
  };

  const handleAddSkill = ({ id, skill }) => {
    setSkillList([{ id, skill }, ...skillList]);
  };

  const handleRemoveSkill = (skillId) => {
    setSkillList(skillList.filter((sk) => sk.id !== skillId));
  };

  const cvRef = useRef();
  const handleDownloadPDF = async () => {
    const cvDocument = cvRef.current;

    if (!cvDocument) {
      return;
    }

    // Captura el contenido como imagen
    const canvas = await html2canvas(cvDocument, {
      scale: 2, // Mejora la calidad
      useCORS: true, // Carga imagenes externas
    });

    const imgData = canvas.toDataURL("image/png");

    // Configura PDF A4
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Pagina inicial
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Paginas adicionales
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("CV_harvard.pdf");
  };

  return (
    <>
      <aside className="aside__container">
        <PersonalDetails handleChange={handleChange} />
        <Experience
          experienceData={experienceList}
          onAdd={handleAddExperience}
          onRemove={handleRemoveExperience}
        />
        <Education
          educationData={educationList}
          onAdd={handleAddEducation}
          onRemove={handleRemoveEducation}
        />
        <Skills
          skillData={skillList}
          onAdd={handleAddSkill}
          onRemove={handleRemoveSkill}
        />
      </aside>

      <main className="main__container">
        <button
          type="button"
          className="content__button"
          onClick={handleDownloadPDF}
        >
          Descargar PDF
        </button>

        <div
          ref={cvRef}
          style={{
            width: "850px",
            height: "1180px",
            margin: "auto",
            background: "#fff",
          }}
        >
          <Content
            personData={person}
            experienceData={experienceList}
            educationData={educationList}
            skillData={skillList}
          />
        </div>
      </main>
    </>
  );
}

export default App;
