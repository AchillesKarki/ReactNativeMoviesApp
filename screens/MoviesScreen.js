import { useEffect, useState } from 'react';
import { Box } from 'native-base';

import { MOVIE_TYPES } from '../constants';
import { getMovies } from '../services/api';

import AppLoader from '../components/layout/AppLoader';
import FormSelect from '../components/layout/FormSelect';
import ListMain from '../components/lists/ListMain';

const MoviesScreen = ({ navigation }) => {
  const [movieType, setMovieType] = useState(MOVIE_TYPES[0]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesFromAPI();

    async function getMoviesFromAPI() {
      try {
        const response = await getMovies(movieType);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieType]);

  const handleMovieTypeChange = (type) => {
    setMovieType(type);
  };

  return (
    <>
      <Box py={4}>
        <FormSelect currentValue={movieType} handleOnChange={handleMovieTypeChange} selectOptions={MOVIE_TYPES} />
      </Box>

      {movies.length > 0 ? <ListMain navigation={navigation} listItems={movies} entity='movie' /> : <AppLoader />}
    </>
  );
};

export default MoviesScreen;
