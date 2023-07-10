import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesApi';
import { Suspense, useEffect, useState } from 'react';
import {
  Image,
  Wrapper,
  Button,
  Genre,
  Info,
  P,
  H2,
  H3,
  MoreInfo,
} from './MovieDetails.styled';
import { Ul } from 'components/ShowMoviesList/ShowMoviesList.styled';
import css from 'pages/MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  const link = location.state?.from ?? '/';

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovieDetails(movieDetails);
        setGenres(movieDetails.genres);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [id]);

  return (
    <>
      <Link to={link}>
        <Button>↩️ Go back</Button>
      </Link>
      <Wrapper>
        <Image>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `https://webartdevelopers.com/blog/wp-content/uploads/2020/02/404-Not-Found-SVG-768x432.png`
            }
            alt={movieDetails.title}
            width={250}
          />
        </Image>
        <Info>
          <H2>{movieDetails.title}</H2>
          <P>User score: {(movieDetails.vote_average * 10).toFixed(0)}%</P>
          <H3>Overview</H3>
          <P>{movieDetails.overview}</P>
          <H3>Genres</H3>
          <Genre>
            {genres.map(genre => (
              <P key={genre.id}>{genre.name}</P>
            ))}
          </Genre>
        </Info>
      </Wrapper>
      <hr />
      <div>
        <MoreInfo>Additional Imagermation</MoreInfo>
        <Ul>
          <li className={css.linkInfo}>
            <Link
              className={css.linkInfo__item}
              to="cast"
              state={{ from: link }}
            >
              Cast
            </Link>
          </li>
          <li className={css.linkInfo}>
            <Link
              className={css.linkInfo__item}
              to="reviews"
              state={{ from: link }}
            >
              Reviews
            </Link>
          </li>
        </Ul>
      </div>
      <hr />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
