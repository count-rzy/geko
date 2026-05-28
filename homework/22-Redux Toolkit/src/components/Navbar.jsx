import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Главная</Link>
      <Link to="/movies" style={{ color: '#fff', textDecoration: 'none' }}>Фильмы</Link>
      <Link to="/favorites" style={{ color: '#fff', textDecoration: 'none' }}>Избранное</Link>
    </nav>
  );
}