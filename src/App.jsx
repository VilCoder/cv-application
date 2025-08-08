import { useState } from "react";
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
        <Content
          personData={person}
          experienceData={experienceList}
          educationData={educationList}
          skillData={skillList}
        />
      </main>
    </>
  );
}

export default App;
