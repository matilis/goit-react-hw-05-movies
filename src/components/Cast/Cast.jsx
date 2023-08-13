import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesApi';
import { Ul, Li, P, T } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setCast(await getMovieCredits(id));
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  return (
    <>
      <Ul>
        {cast.map(actor => (
          <Li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : `https://webartdevelopers.com/blog/wp-content/uploads/2020/02/404-Not-Found-SVG-768x432.png`
              }
              alt={actor.name}
            />
            <P>{actor.name}</P>
            <T>Character: {actor.character}</T>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Cast;
