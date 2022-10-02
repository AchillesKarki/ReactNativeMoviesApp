import { NativeBaseProvider } from 'native-base';

import AppStack from './navigation/AppStack';
import Header from './components/layout/Header';

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <AppStack />
    </NativeBaseProvider>
  );
};

export default App;
