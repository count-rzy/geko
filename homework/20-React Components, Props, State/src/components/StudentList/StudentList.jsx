import StudentCard from "../StudentCard/StudentCard";

function StudentList({ students }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          profession={student.profession}
          color={student.color}
        />
      ))}
    </div>
  );
}

export default StudentList;