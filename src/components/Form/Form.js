import React from 'react';
import {TextInput, View} from 'react-native';
import {formStyle} from './FormStyle';
const Form = () => {
  return (
    <View style={formStyle.viewForm}>
      <View style={formStyle.viewInputs}>
        <TextInput
          style={formStyle.input}
          placeholder="Loan amount"
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Interes"
          keyboardType="numeric"
          style={[formStyle.input, formStyle.inputPercentage]}
        />
      </View>
    </View>
  );
};

export default Form;
