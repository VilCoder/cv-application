export function saveCvData(person, experience, education, skills) {
  console.log("Ejecutando saveDataCv")
  const cvData = {
    person,
    experience,
    education,
    skills,
  }

  localStorage.setItem("infoCV", JSON.stringify(cvData));
}

export function loadCvData() {
  const storedData = localStorage.getItem("infoCV");

  return storedData ? JSON.parse(storedData) : {};
}