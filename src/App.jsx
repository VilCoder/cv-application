import { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./styles/App.css";
import "./styles/responsive.css";

import { initialPersonDetails } from "./logic/constants";
import { Content } from "./components/Content";
import { PersonForm } from "./components/PersonForm";
import { ExperienceForm } from "./components/ExperienceForm";
import { EducationForm } from "./components/EducationForm";
import { SkillForm } from "./components/SkillForm";
import { loadCvData, saveCvData } from "./logic/storage";

function App() {
  const [person, setPerson] = useState(() => {
    const data = loadCvData();
    return data.person || initialPersonDetails;
  });

  const [experienceList, setExperienceList] = useState(() => {
    const data = loadCvData();
    return data.experience || [];
  });

  const [educationList, setEducationList] = useState(() => {
    const data = loadCvData();
    return data.education || [];
  });

  const [skillList, setSkillList] = useState(() => {
    const data = loadCvData();
    return data.skills || [];
  });

  const handlePersonChange = (e) => {   
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExperience = ({
    id,
    company,
    job,
    address__company,
    startDate,
    endDate,
    description,
  }) => {
    setExperienceList([
      { id, company, job, address__company, startDate, endDate, description },
      ...experienceList,
    ]);
  };

  const handleRemoveExperience = (experienceId) => {
    setExperienceList(experienceList.filter((ex) => ex.id !== experienceId));
  };

  const handleAddEducation = ({
    id,
    school,
    degree,
    address__school,
    degreeDate,
  }) => {
    setEducationList([
      { id, school, degree, address__school, degreeDate },
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

  useEffect(() => {
    saveCvData(person, experienceList, educationList, skillList);
  }, [person, experienceList, educationList, skillList]);

  const cvRef = useRef();
  const handleDownloadPDF = async () => {
    const cvDocument = cvRef.current;

    if (!cvDocument) {
      return;
    }

    // Capture the content as an image
    const canvas = await html2canvas(cvDocument, {
      scale: 2, // Improves quality
      useCORS: true, // Load external images
    });

    const imgData = canvas.toDataURL("image/png");

    // Capture PDF A4
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Home page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Additional pages
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
        <PersonForm handleChange={handlePersonChange} />
        <ExperienceForm
          experienceData={experienceList}
          onAdd={handleAddExperience}
          onRemove={handleRemoveExperience}
        />
        <EducationForm
          educationData={educationList}
          onAdd={handleAddEducation}
          onRemove={handleRemoveEducation}
        />
        <SkillForm
          skillData={skillList}
          onAdd={handleAddSkill}
          onRemove={handleRemoveSkill}
        />

        <button
          type="button"
          className="aside__button"
          onClick={handleDownloadPDF}
        >
          Descargar PDF
        </button>
      </aside>

      <main className="main__container">
        <div
          ref={cvRef}
          style={{
            width: "850px",
            maxWidth: "100%",
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
