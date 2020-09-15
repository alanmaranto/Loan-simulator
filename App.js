import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './src/components/Form/Form';
import {AppStyles} from './AppStyle';

const App = () => {
  const [amount, setAmount] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);

  const onSubmit = () => {};

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={AppStyles.safeArea}>
        <View style={AppStyles.backgroundView} />
        <Text style={AppStyles.titleApp}>Credit Bank Simulator</Text>
        <Form
          setAmount={setAmount}
          setInteres={setInteres}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <View>
        <Button title="Send" onPress={onSubmit} />
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default App;
