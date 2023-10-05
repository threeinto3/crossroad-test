import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utilities/constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    height: scale(56),
    overflow: 'hidden',
    backgroundColor: colors.white1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.grey1,
  },
  borderBottom1px: {borderBottomWidth: scale(1)},
  leftStyle: {
    height: scale(56),
    width: scale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightStyle: {
    height: scale(56),
    width: scale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: scale(20),
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
  },

  titleContainer: {flex: 1},
});

export default styles;
