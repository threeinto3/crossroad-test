import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../utilities/constants/colors';

export const styles = StyleSheet.create({
  inputView: {
    marginVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.grey3,
    borderWidth: 1,
    borderRadius: scale(8),
    backgroundColor: colors.black3,
    paddingHorizontal: scale(12),
  },
  input: {
    paddingVertical: scale(10),
    color: colors.white3,
    height: scale(48),
    flex: 1,
    fontFamily: 'OpenSans-Regular',
  },
  label: {
    marginHorizontal: scale(5),
    fontSize: scale(14),
    color: colors.black1,
  },
  errorLabel: {marginHorizontal: scale(5), color: colors.red1},
});
