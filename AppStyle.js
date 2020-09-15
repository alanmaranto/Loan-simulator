import {StyleSheet} from 'react-native';
import {colors} from './src/utils/colors';

export const AppStyles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  backgroundView: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
    position: 'absolute',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 15,
  },
});
