import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/moviesApi';
import { Author } from './Reviews.styled';
import { Ul } from '../ShowMoviesList/ShowMoviesList.styled';
import { P } from 'pages/MovieDetails/MovieDetails.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setReviews(await getReviews(id));
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [id]);

  return (
    <Ul>
      {reviews.length === 0 ? (
        <li>We don't have any reviews for this movie</li>
      ) : (
        reviews.map(review => (
          <li key={review.id}>
            <Author>Author: {review.author}</Author>
            <P>{review.content}</P>
          </li>
        ))
      )}
    </Ul>
  );
};

export default Reviews;
