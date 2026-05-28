import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favorites/favoritesSlice';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.list);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <h3 style={{ padding: '20px' }}>No favorite movies</h3>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ваше избранное</h2>
      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', marginTop: '20px' }}>
        {favorites.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center' }}>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{movie.title}</h3>
            <p>{movie.year} год</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to={`/movies/${movie.id}`}>
                <button style={{ width: '100%', padding: '5px' }}>Details</button>
              </Link>
              <button 
                onClick={() => dispatch(removeFavorite(movie.id))} 
                style={{ padding: '5px', background: 'orange', border: 'none', cursor: 'pointer' }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}