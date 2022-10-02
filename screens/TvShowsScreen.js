import { Button, Text, View } from 'native-base';

const TvShowsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </Button>
    </View>
  );
};

export default TvShowsScreen;
