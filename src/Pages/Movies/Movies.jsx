import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import EditorList from '../../components/EditorList/EditorList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from '../../TMBD/TMBDApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryMovie = searchParams.get('query');
    if (!queryMovie) return;

    const searchMovies = () => {
      setLoading(true);

      fetchSearchByKeyword(queryMovie)
        .then(searchResults => {
          setSearchFilms(searchResults);
          setNoMoviesText(searchResults.length === 0);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    searchMovies(searchParams);
  }, [searchParams]);

  const queryFromParams = searchParams.get('query') || '';

  const handleFormSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Form searchMovies={handleFormSubmit} initialQuery={queryFromParams} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
//336a33d599bf6aff6a2e497c94250ac4