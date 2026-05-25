import StudentList from "./components/StudentList/StudentList";
import { useState } from "react";
import StudentForm from "./components/StudentForm/StudentForm";

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Arman",
      age: 20,
      profession: "Frontend",
      color: "orange",
    },

    {
      id: 2,
      name: "Anna",
      age: 22,
      profession: "Designer",
      color: "lightblue",
    },

    {
      id: 3,
      name: "Karen",
      age: 19,
      profession: "Backend",
      color: "lightgreen",
    },
  ]);
  const deleteStudent = (id) => {
  setStudents(
    students.filter((student) => student.id !== id)
  );
};
const addStudent = (newStudent) => {
  const colors = ["red", "blue", "green", "orange", "purple"];

  const randomColor =
    colors[Math.floor(Math.random() * colors.length)];

  const student = {
    id: Date.now(),
    ...newStudent,
    color: randomColor,
  };

  setStudents([...students, student]);
};

  return (
    <div>
      <h1>Student Manager</h1>

      <StudentForm onAddStudent={addStudent} />


      <StudentList
  students={students}
  onDelete={deleteStudent}
/>
    </div>
  );
}

export default App;