import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../TMBD/TMBDApi';
import Loader from '../../components/Loader/Loader';
import {
  Container,
  List,
  ListInfo,
  LinkInfo,
  Button,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true);

      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <>
      <Link to={backLink.current}>
        <Button type="button">Go back</Button>
      </Link>
      {loading && <Loader />}

      {movieInfo && (
        <Container>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </div>
        </Container>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
