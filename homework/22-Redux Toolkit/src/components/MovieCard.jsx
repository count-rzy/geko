import { Link } from 'react-router-dom';

export default function MovieCard({ id, title, image, year }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{title}</h3>
      <p>{year} год</p>
      <Link to={`/movies/${id}`}>
        <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Details</button>
      </Link>
    </div>
  );
}