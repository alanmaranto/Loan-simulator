import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const formStyle = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    width: '60%',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    paddingHorizontal: 20,
    color: '#000',
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});
