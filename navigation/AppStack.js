import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{
            headerBackTitle: 'Back to List',
            headerBackTitleStyle: {
              fontSize: 14,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
