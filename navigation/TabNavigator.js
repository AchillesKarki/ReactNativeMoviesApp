import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MoviesScreen from '../screens/MoviesScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import TvShowsScreen from '../screens/TvShowsScreen';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: '#283649', tabBarLabelStyle: { fontSize: 11 } }}
    >
      <Tab.Screen name='Movies' component={MoviesScreen} />
      <Tab.Screen name='Search Results' component={SearchResultsScreen} />
      <Tab.Screen name='TV Shows' component={TvShowsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
