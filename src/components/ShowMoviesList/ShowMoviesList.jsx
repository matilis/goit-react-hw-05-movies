import { Link, useLocation } from 'react-router-dom';
import { Ul, Wrapper, Img } from './ShowMoviesList.styled';
import PropTypes from 'prop-types';
import css from 'components/ShowMoviesList/ShowMoviesList.module.css';

const ShowMoviesList = ({ movies }) => {
  const setLocation = useLocation();

  return (
    <Ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className={css.linkList}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: setLocation },
            }}
          >
            <Wrapper>
              <Img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : `https://webartdevelopers.com/blog/wp-content/uploads/2020/02/404-Not-Found-SVG-768x432.png`
                }
              />
              {movie.title}
            </Wrapper>
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
