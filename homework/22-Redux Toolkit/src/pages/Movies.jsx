import { moviesData } from '../data/movies';
import MovieCard from '../components/MovieCard';

export default function Movies() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Все фильмы</h2>
      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', marginTop: '20px' }}>
        {moviesData.map((movie) => (
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.image}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
}