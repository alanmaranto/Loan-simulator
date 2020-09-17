import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import Form from './src/components/Form/Form';
import Footer from './src/components/Footer/Footer';
import Result from './src/components/Result/Result';
import {AppStyles} from './AppStyle';

const App = () => {
  const [amount, setAmount] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (amount && interes && months) {
      onCalculate();
    } else {
      resetForm();
    }
  }, [amount, interes, months]);

  const onCalculate = () => {
    resetForm();
    if (!amount) {
      setErrorMessage('Add the amount you want to request');
    } else if (!interes) {
      setErrorMessage('Add interest on the loan');
    } else if (!months) {
      setErrorMessage('Select the months to pay');
    } else {
      const int = interes / 100;
      const fee = amount / ((1 - Math.pow(int + 1, -months)) / int);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayment: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  };

  const resetForm = () => {
    setErrorMessage('');
    setTotal(null);
  };

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

      <Result
        errorMessage={errorMessage}
        amount={amount}
        interes={interes}
        months={months}
        total={total}
      />

      <Footer onCalculate={onCalculate} />
    </>
  );
};

export default App;
