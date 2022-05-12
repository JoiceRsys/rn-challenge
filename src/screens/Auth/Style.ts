import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_17,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from '../../styles/typography';
import {hp, normalize, ph, pv, wp} from '../../utils/constants';

export default StyleSheet.create({
  stripContainer: {
    position: 'absolute',
    backgroundColor: colors.RED,
    transform: [
      {rotate: '-38deg'},
      {translateX: ph(-43)},
      {translateY: pv(-10)},
    ],
    height: hp(39),
    width: wp(250),
    marginTop: pv(39),
    zIndex: 10,
  },
  stripText: {
    fontFamily: FONT_FAMILY_BOLD,
    color: colors.WHITE,
    fontSize: FONT_SIZE_17,
  },
  logo: {
    height: hp(150),
    width: wp(190),
  },
  landingText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_18,
    color: colors.WHITE,
    textAlign: 'center',
  },
  btnContainer: {
    height: hp(43),
    width: wp(236),
    backgroundColor: colors.WHITE,
    borderRadius: normalize(100),
  },
  icon: {
    height: hp(20),
    width: wp(20),
  },
  signupOptionText: {
    color: colors.BLACK_2,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_16,
  },
  loginText: {
    color: colors.WHITE,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_16,
  },
  policyText: {
    color: colors.WHITE,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_13,
    opacity: 0.8,
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.WHITE,
  },
  backIcon: {
    height: hp(20),
    width: wp(20),
    marginLeft: ph(5),
  },
  headerText: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_20,
    color: colors.WHITE,
    textAlign: 'center',
  },
  backBtnContainer: {
    height: wp(41),
    width: wp(41),
    borderRadius: wp(20.5),
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupBtn: {
    height: hp(43),
    width: wp(151),
    borderRadius: normalize(100),
    backgroundColor: colors.GREEN_AQUA,
    alignSelf: 'center',
  },
  signupBtnText: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_16,
    color: colors.WHITE,
  },
  errorContainer: {
    backgroundColor: colors.ALERT,
    alignSelf: 'center',
    borderRadius: normalize(4),
  },
  errorText: {
    color: colors.WHITE,
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_16,
  },
  profileContainer: {
    backgroundColor: colors.WHITE_1,
    flex: 1,
  },
  profileHeader: {
    fontFamily: FONT_FAMILY_BOLD,
    color: colors.BLACK_2,
    fontSize: FONT_SIZE_16,
  },
  labelText: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    color: colors.BLACK_2,
    fontSize: FONT_SIZE_14,
  },
  textInputStyle: {
    width: '100%',
    height: hp(52),
    borderRadius: normalize(4),
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.GRAY_LIGHT,
    paddingHorizontal: ph(11),
  },
  logoutBtn: {
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    width: wp(162),
    height: hp(44),
    borderRadius: normalize(24.5),
  },
  logoutText: {
    fontSize: FONT_SIZE_13,
    fontFamily: FONT_FAMILY_BOLD,
    color: colors.BLACK_2,
  },
  doneContainer: {
    backgroundColor: colors.WHITE,
    alignSelf: 'flex-end',
    width: '100%',
    height: hp(47),
    flex: 0.4,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: colors.BLACK,
  },
});
