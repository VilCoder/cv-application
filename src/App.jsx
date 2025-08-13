import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./styles/App.css";
import "./styles/responsive.css";

import { initialPersonDetails } from "./logic/constants";
import { Content } from "./components/Content";
import { PersonalDetails } from "./components/PersonalDetails";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { loadCvData, saveCvData } from "./logic/storage";
import { Navbar } from "./components/Navbar";

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

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExperience = ({
    company,
    job,
    address,
    startDate,
    endDate,
    description,
  }) => {
    setExperienceList([
      { company, job, address, startDate, endDate, description },
      ...experienceList,
    ]);
  };

  const handleRemoveExperience = (experienceId) => {
    setExperienceList(experienceList.filter((ex) => ex.id !== experienceId));
  };

  const handleAddEducation = ({ school, degree, address, degreeDate }) => {
    setEducationList([
      { school, degree, address, degreeDate },
      ...educationList,
    ]);
  };

  const handleRemoveEducation = (educationId) => {
    setEducationList(educationList.filter((ed) => ed.id !== educationId));
  };

  const handleAddSkill = async ({ skill }) => {
    setSkillList([{ skill }, ...skillList]);
  };

  const handleRemoveSkill = (skillId) => {
    setSkillList(skillList.filter((sk) => sk.id !== skillId));
  };

  saveCvData(person, experienceList, educationList, skillList);

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
