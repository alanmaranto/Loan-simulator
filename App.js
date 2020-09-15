import React from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import {AppStyles} from './AppStyle';

const App = () => {
  return (
    <>
      <SafeAreaView style={AppStyles.safeArea}>
        <Text>Head form</Text>
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default App;
