import React from 'react';
import {TextInput, View, LogBox} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {selectOptions} from './helpers';
import {formStyle, picketSelectStyle} from './FormStyle';

LogBox.ignoreLogs(['Picker has been extracted']);

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
        placeholder={{
          label: 'Select the payment terms',
          value: null,
        }}
        onValueChange={(value) => setMonths(value)}
        items={selectOptions}
      />
    </View>
  );
};

export default Form;
