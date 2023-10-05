import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../utilities/constants/colors';

export const styles = StyleSheet.create({
  container: {marginTop: scale(20), flex: 1},
  inputContainer: {marginHorizontal: scale(20)},
  inputLabel: {color: colors.white1, fontSize: scale(16)},
  questionLabel: {
    color: colors.white1,
    marginHorizontal: scale(20),
    fontSize: scale(16),
    marginVertical: scale(10),
    fontFamily: 'OpenSans-Regular',
  },
  dotContainer: {marginVertical: scale(20)},
  renderContainer: {
    marginVertical: scale(10),
    marginHorizontal: scale(30),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    paddingBottom: scale(12),
  },
  iconContainer: {flex: 0.1},
  distanceLabel: {
    color: colors.grey5,
    flex: 0.15,
    fontFamily: 'OpenSans-Regular',
  },
  locationLabel: {
    color: colors.white1,
    fontSize: scale(14),
    flex: 0.8,
    fontFamily: 'OpenSans-Regular',
  },

  button: {
    backgroundColor: colors.green1,
    paddingVertical: 12,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: scale(20),
    marginHorizontal: scale(20),
    marginTop: 'auto',
  },
  buttonText: {
    fontSize: 16,
    color: colors.black3,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  selectedLocationDot: {
    height: 20,
    width: 20,
    borderRadius: scale(10),
    borderColor: colors.grey7,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(12),
  },
  selectedLocationInnerDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.green1,
  },
  rightButton: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  rightLabel: {
    justifyContent: 'flex-end',
    marginHorizontal: scale(5),
    fontSize: scale(14),
    color: colors.grey5,
    fontFamily: 'OpenSans-Regular',
  },
});
