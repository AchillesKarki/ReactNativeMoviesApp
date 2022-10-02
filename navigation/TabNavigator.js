import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SECONDARY_COLOR } from '../constants';

import MoviesScreen from '../screens/MoviesScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import TvShowsScreen from '../screens/TvShowsScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: SECONDARY_COLOR,
        tabBarLabelStyle: { fontSize: 11.5 },
      }}
    >
      <Tab.Screen name='Movies' component={MoviesScreen} />
      <Tab.Screen name='Search Results' component={SearchResultsScreen} />
      <Tab.Screen name='TV Shows' component={TvShowsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
