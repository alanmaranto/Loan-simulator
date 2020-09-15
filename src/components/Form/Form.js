import React from 'react';
import {TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {selectOptions} from './helpers';
import {formStyle, picketSelectStyle} from './FormStyle';

const Form = ({setMonths, setAmount, setInteres}) => {
  return (
    <View style={formStyle.viewForm}>
      <View style={formStyle.viewInputs}>
        <TextInput
          style={formStyle.input}
          placeholder="Loan amount"
          keyboardType="numeric"
          onChange={(e) => setAmount(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes"
          keyboardType="numeric"
          style={[formStyle.input, formStyle.inputPercentage]}
          onChange={(e) => setInteres(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={picketSelectStyle}
        onValueChange={(value) => setMonths(value)}
        items={selectOptions}
      />
    </View>
  );
};

export default Form;
