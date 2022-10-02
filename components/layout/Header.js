import { Box, HStack, Text } from 'native-base';
import { StatusBar } from 'expo-status-bar';

import { PRIMARY_COLOR } from '../../constants';

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle='light-content' />
      <Box safeAreaTop backgroundColor={PRIMARY_COLOR} color='#1851439'>
        <HStack px={1} py={3} alignItems='center' justifyContent='center'>
          <Text color='#fefefe' fontSize={18} fontWeight='bold'>
            Movies App
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
