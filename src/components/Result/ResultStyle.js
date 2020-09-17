import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const ResultStyles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  error: {
    color: colors.PRIMARY_COLOR_ERROR,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  value: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
  }
});
