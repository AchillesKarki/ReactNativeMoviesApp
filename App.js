import { NativeBaseProvider } from 'native-base';

import AppStack from './navigation/AppStack';
import Header from './components/layout/Header';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <AppStack />
    </NativeBaseProvider>
  );
}
