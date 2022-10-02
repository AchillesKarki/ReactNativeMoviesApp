import React from 'react';
import { Center, Heading, HStack, Spinner, View } from 'native-base';
import { PRIMARY_COLOR } from '../../constants';

export default function AppLoader() {
  return (
    <View m={4}>
      <Center>
        <HStack>
          <Spinner color={PRIMARY_COLOR} accessibilityLabel='Loading movies' />
          <Heading px={2} fontSize='md' fontWeight='bold' color={PRIMARY_COLOR}>
            Loading Results...
          </Heading>
        </HStack>
      </Center>
    </View>
  );
}
