import { useParams } from 'react-router-dom';
import { moviesData } from '../data/movies';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Ищем фильм в данных по id из урла
  const movie = moviesData.find(m => m.id === id);
  
  // Проверяем, есть ли уже этот фильм в избранном
  const favorites = useSelector((state) => state.favorites.list);
  const isFavorite = favorites.some(m => m.id === id);

  if (!movie) {
    return <div style={{ padding: '20px' }}>Фильм не найден!</div>;
  }

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '30px' }}>
      <img src={movie.image} alt={movie.title} style={{ width: '250px', borderRadius: '8px' }} />
      <div>
        <h1>{movie.title}</h1>
        <p><b>Год:</b> {movie.year}</p>
        <p><b>Рейтинг:</b> {movie.rating}</p>
        <p><b>Описание:</b> {movie.description}</p>
        
        {isFavorite ? (
          <button 
            onClick={() => dispatch(removeFavorite(movie.id))} 
            style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Убрать из избранного
          </button>
        ) : (
          <button 
            onClick={() => dispatch(addFavorite(movie))} 
            style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Добавить в избранное
          </button>
        )}
      </div>
    </div>
  );
}