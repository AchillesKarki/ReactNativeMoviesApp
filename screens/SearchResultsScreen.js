import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { VStack, FormControl, Input, Center, HStack, Button, Icon, Text, Item } from 'native-base';

import { getSearchResults } from '../services/api';
import { SEARCH_RESULTS_TYPES, PRIMARY_COLOR } from '../constants';

import FormSelect from '../components/layout/FormSelect';
import ListMain from '../components/lists/ListMain';

const SearchResultsScreen = ({ navigation }) => {
  const [searchResultsType, setSearchResultsType] = useState(SEARCH_RESULTS_TYPES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);

  const handleSearchResultsTypeTypeChange = (itemValue) => {
    setSearchResultsType(itemValue);
  };

  const onSubmit = async () => {
    if (!searchQuery) {
      setHasErrors(true);
      return;
    }

    setHasErrors(false);

    try {
      const response = await getSearchResults(searchResultsType, searchQuery);
      setSearchResults(response.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack>
      <VStack m={6}>
        <FormControl isRequired isInvalid={hasErrors}>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Search Movie/TV Show Name
          </FormControl.Label>

          <Input
            InputLeftElement={<Icon as={<Ionicons />} name='ios-search' ml={2} />}
            placeholder='i.e. James Bond, CSI'
            backgroundColor='muted.200'
            onChangeText={(value) => setSearchQuery(value)}
          />
        </FormControl>
        <FormControl isRequired isInvalid={hasErrors}>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Choose Search Type
          </FormControl.Label>

          <HStack space={3} alignItems='center'>
            <FormSelect
              currentValue={searchResultsType}
              handleOnChange={handleSearchResultsTypeTypeChange}
              selectOptions={SEARCH_RESULTS_TYPES}
            />

            <Button
              backgroundColor={PRIMARY_COLOR}
              height={10}
              onPress={onSubmit}
              startIcon={<Icon as={<Ionicons />} name='ios-search' />}
            >
              Search
            </Button>
          </HStack>

          <FormControl.HelperText>Please select a search type</FormControl.HelperText>

          <FormControl.ErrorMessage
            _text={{
              fontSize: 'xs',
            }}
          >
            Movie/TV show name is required
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
      {searchResults.length > 0 ? (
        <ListMain navigation={navigation} listItems={searchResults} entity={searchResultsType} />
      ) : (
        <Center>
          <Text fontSize='xl' fontWeight='bold'>
            Please Initiate a search...
          </Text>
        </Center>
      )}
    </VStack>
  );
};

export default SearchResultsScreen;
