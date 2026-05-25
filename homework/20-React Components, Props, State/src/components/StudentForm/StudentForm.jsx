import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("Frontend");

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <select
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      >
        <option>Frontend</option>
        <option>Backend</option>
        <option>Designer</option>
      </select>

      <button onClick={handleSubmit}>Add Student</button>
    </div>
  );
  const handleSubmit = () => {
  const newStudent = {
    name,
    age,
    profession,
  };

  onAddStudent(newStudent);

  setName("");
  setAge("");
  setProfession("Frontend");
};
}

export default StudentForm;