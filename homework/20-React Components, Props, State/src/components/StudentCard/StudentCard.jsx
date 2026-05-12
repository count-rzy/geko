import "./StudentCard.css";

function StudentCard({ name, age, profession, color }) {
  return (
    <div
  className="student-card"
  style={{ backgroundColor: color }}
>
      <h2>{name}</h2>
<p>Age: {age}</p>
<p>Profession: {profession}</p>

      <button>Delete</button>
    </div>
  );
}

export default StudentCard;