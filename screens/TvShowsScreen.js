import { useEffect, useState } from 'react';
import { Box } from 'native-base';

import { TV_SHOWS_TYPES } from '../constants';
import { getTvShows } from '../services/api';

import AppLoader from '../components/layout/AppLoader';
import FormSelect from '../components/layout/FormSelect';
import ListMain from '../components/lists/ListMain';

const TvShowsScreen = ({ navigation }) => {
  const [tvShowsType, setTvShowsType] = useState(TV_SHOWS_TYPES[0]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    getTvShowsFromAPI();

    async function getTvShowsFromAPI() {
      try {
        const response = await getTvShows(tvShowsType);
        setTvShows(response);
      } catch (error) {
        console.log(error);
      }
    }
  }, [tvShowsType]);

  const handleTvShowsTypeChange = (type) => {
    setTvShowsType(type);
  };

  return (
    <>
      <Box py={4}>
        <FormSelect
          currentValue={tvShowsType}
          handleOnChange={handleTvShowsTypeChange}
          selectOptions={TV_SHOWS_TYPES}
        />
      </Box>

      {tvShows.length > 0 ? <ListMain navigation={navigation} listItems={tvShows} entity='tv' /> : <AppLoader />}
    </>
  );
};

export default TvShowsScreen;
