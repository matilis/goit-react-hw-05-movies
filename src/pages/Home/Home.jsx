import React, { useState, useEffect } from 'react';
import ShowMoviesList from 'components/ShowMoviesList/ShowMoviesList';
import { fetchMoviesTrending } from 'services/moviesApi';
import { H1 } from './Home.styled';

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setMovie(await fetchMoviesTrending());
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  return (
    <div>
      <H1>Trending today</H1>
      <ShowMoviesList movies={movie} />
    </div>
  );
};
export default Home;
