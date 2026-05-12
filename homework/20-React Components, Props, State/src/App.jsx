import StudentList from "./components/StudentList/StudentList";
import { useState } from "react";

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

  return (
    <div>
      <h1>Student Manager</h1>

      <StudentList students={students} />
    </div>
  );
}

export default App;