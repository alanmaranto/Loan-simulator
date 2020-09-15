import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import Form from './src/components/Form/Form';
import {AppStyles} from './AppStyle';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={AppStyles.safeArea}>
        <Text style={AppStyles.titleApp}>Credit Bank Simulator</Text>
        <Form />
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
