import { Button, HStack, Image, Text, VStack } from 'native-base';
import { SECONDARY_COLOR } from '../../constants';

const ListItem = ({ navigation, item, entity }) => {
  return (
    <HStack py={4}>
      <VStack px={4}>
        {!item.poster_path ? (
          // using alternative image if not present in the api response
          <Image source={require('../../assets/adaptive-icon.png')} alt={item.title || item.name} size='xl' />
        ) : (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
            }}
            alt={item.title || item.name}
            size='xl'
          ></Image>
        )}
      </VStack>
      <VStack>
        <Text fontWeight='bold' fontSize={15} w={200}>
          {item.title || item.name}
        </Text>
        <Text py={0.5}>Popularity: {item.popularity}</Text>
        <Text py={0.5}>Release Date: {item.release_date || item.first_air_date}</Text>
        <Button
          w='80%'
          mt={'auto'}
          backgroundColor={SECONDARY_COLOR}
          onPress={() => {
            navigation.navigate('Details', { id: item.id, entity: entity !== 'multi' ? entity : item.media_type });
          }}
        >
          More Details
        </Button>
      </VStack>
    </HStack>
  );
};

export default ListItem;
