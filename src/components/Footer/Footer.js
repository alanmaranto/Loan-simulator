import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FooterStyles} from './FooterStyle';

const Footer = ({onCalculate}) => {
  return (
    <View style={FooterStyles.viewFooter}>
      <TouchableOpacity style={FooterStyles.button} onPress={onCalculate}>
        <Text style={FooterStyles.text}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
