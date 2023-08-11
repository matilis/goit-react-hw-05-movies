import React from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
import ShowMoviesList from 'components/ShowMoviesList/ShowMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesApi';
import { Container } from '../Home/Home.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const movieName = searchParams.get('movie') ?? '';

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setMoviesList(await searchMovies(movieName));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.input.value;
    setSearchParams({ movie: searchQuery });
    e.target.reset();
  };

  return (
    <Container>
      <SearchBox onSubmit={handleSubmit} />
      <ShowMoviesList movies={moviesList} />
    </Container>
  );
};

export default Movies;
