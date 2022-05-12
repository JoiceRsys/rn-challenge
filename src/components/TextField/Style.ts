import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import {
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '../../styles/typography';
import {hp, normalize, ph, pv, wp} from '../../utils/constants';

export default StyleSheet.create({
  labelText: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_16,
    color: colors.WHITE,
    marginBottom: pv(7),
  },
  textInput: {
    width: wp(299),
    height: hp(52),
    borderRadius: normalize(4),
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.WHITE,
    paddingHorizontal: ph(11),
  },
  errorText: {
    fontFamily: FONT_FAMILY_SEMIBOLD,
    fontSize: FONT_SIZE_14,
    color: colors.BLACK,
    marginTop: pv(7),
  },
});
