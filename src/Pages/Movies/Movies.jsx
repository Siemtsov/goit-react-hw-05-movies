import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import EditorList from 'components/EditorList/EditorList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'TMBD/TMBDApi';

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
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false);
        });
      searchMovies(searchParams);
    };
  }, [searchParams]);

  const queryFormParams = searchParams.get('query') || '';

  const handelFormSubbmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Form searchMovies={handelFormSubbmit}>
        {loading && <Loader />}
        {noMoviesText && (
          <p>There are no movies for your request, please try again</p>
        )}
        {searchFilms && <EditorList films={searchFilms} />}
      </Form>
    </main>
  );
};

export default Movies;
