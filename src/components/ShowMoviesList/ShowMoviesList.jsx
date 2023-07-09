import { Link, useLocation } from 'react-router-dom';
import { Ul } from './ShowMoviesList.styled';
import PropTypes from 'prop-types';

const ShowMoviesList = ({ movies }) => {
  const setLocation = useLocation();

  return (
    <Ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: setLocation },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </Ul>
  );
};
export default ShowMoviesList;

ShowMoviesList.propTypes = {
  movies: PropTypes.array,
  navigate: PropTypes.string,
};
