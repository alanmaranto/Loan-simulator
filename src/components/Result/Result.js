import React from 'react';
import {View, Text} from 'react-native';
import {ResultStyles} from './ResultStyle';

const Result = ({errorMessage, amount, interes, months, total}) => {
  return (
    <View style={ResultStyles.content}>
      {total && (
        <View style={ResultStyles.boxResult}>
          <Text style={ResultStyles.title}>Resume</Text>
          <DataResult title="Requested amount:" value={`${amount} $`} />
          <DataResult title="Interes %:" value={`${interes} %`} />
          <DataResult title="Payment terms:" value={`${months} months`} />
          <DataResult title="Month payment:" value={`${total.monthlyFee} $`} />
          <DataResult title="Total payment:" value={`${total.totalPayment} $`} />
        </View>
      )}
      <View>
        <Text style={ResultStyles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
};

const DataResult = ({title, value}) => {
  return (
    <View style={ResultStyles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default Result;
