import { useState } from "react";
// import { useImmer } from "use-immer";
import "./App.css";

import {
  initialPersonDetails,
  initialExperience,
  initialEducation,
  initialSkills,
} from "./constants";
import { Content } from "./components/Content";
import { PersonalDetails } from "./components/PersonalDetails";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";

function App() {
  const [personalDetails, setPersonalDetails] = useState(initialPersonDetails);
  const [experienceList, setExperienceList] = useState(initialExperience);
  const [educationList, setEducationList] = useState(initialEducation);
  const [skillList, setSkillList] = useState(initialSkills);

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExperience = ({
    id,
    company,
    jobTitle,
    address,
    startDate,
    endDate,
    description,
  }) => {
    setExperienceList([
      { id, company, jobTitle, address, startDate, endDate, description },
      ...experienceList,
    ]);
  };

  const handleAddEducation = ({ id, school, degree, address, endDate }) => {
    setEducationList([
      ...educationList,
      { id, school, degree, address, endDate },
    ]);
  };

  const handleAddSkill = ({ id, skill }) => {
    setSkillList([...skillList, { id, skill }]);
  };

  return (
    <>
      <aside className="aside__container">
        <PersonalDetails handleChange={handlePersonalDetailsChange} />
        <Experience onAdd={handleAddExperience} />
        <Education onAdd={handleAddEducation} />
        <Skills onAdd={handleAddSkill} />
      </aside>

      <main className="main__container">
        <Content personData={personalDetails} />
      </main>
    </>
  );
}

export default App;
