import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Box, HStack, Text } from 'native-base';

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor='#283649' barStyle='light-content' />
      <Box safeAreaTop backgroundColor='#283649' color='#1851439'>
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
