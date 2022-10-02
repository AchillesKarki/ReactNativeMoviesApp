import { useEffect, useState } from 'react';
import { Center, Divider, HStack, Image, ScrollView, Text, VStack } from 'native-base';

import { getMovieById, getTvShowById, getPersonById } from '../services/api';

import AppLoader from '../components/layout/AppLoader';

const DetailsScreen = ({ route, navigation }) => {
  const { id, entity } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getSingleDetailsFromAPI();

    async function getSingleDetailsFromAPI() {
      try {
        let response;

        switch (entity) {
          case 'movie':
            response = await getMovieById(id);
            break;

          case 'tv':
            response = await getTvShowById(id);
            break;

          default:
            response = await getPersonById(id);
            break;
        }

        setMovie(response);
        navigation.setOptions({ title: response.title || response.name });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return movie ? (
    <ScrollView>
      <VStack>
        <Center>
          <Text fontSize='3xl' fontWeight='bold' px={8} py={4}>
            {movie.title || movie.name}
          </Text>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie.poster_path || movie.profile_path}`,
            }}
            alt={movie.title || movie.name}
            size='2xl'
            mb={10}
          ></Image>
        </Center>
        <Text px={8} py={4}>
          {movie.overview || movie.biography}{' '}
        </Text>
        <HStack px={8} py={4}>
          <Text fontWeight='500'>Popularity: </Text>
          <Text fontWeight='500'>{movie.popularity}</Text>
          <Divider fontWeight='500' orientation='vertical' ml={2} mr={2} />
          <Text fontWeight='500'>Release Date: </Text>
          <Text fontWeight='500'>{movie.release_date || movie.first_air_date || 'Not Applicable'}</Text>
        </HStack>
      </VStack>
    </ScrollView>
  ) : (
    <AppLoader />
  );
};

export default DetailsScreen;
