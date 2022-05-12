import {ph, pv} from '../utils/constants';
import {StyleSheet} from 'react-native';
import {MetricsSizes, ThemeGutters} from './variables';

export default function (): ThemeGutters {
  return StyleSheet.create({
    ...Object.entries(MetricsSizes).reduce(
      (acc, [key, value]) => ({
        ...acc,
        /* Margins */
        [`${key}BMargin`]: {
          marginBottom: pv(value),
        },
        [`${key}TMargin`]: {
          marginTop: pv(value),
        },
        [`${key}RMargin`]: {
          marginRight: ph(value),
        },
        [`${key}LMargin`]: {
          marginLeft: ph(value),
        },
        [`${key}VMargin`]: {
          marginVertical: pv(value),
        },
        [`${key}HMargin`]: {
          marginHorizontal: ph(value),
        },
        /* Paddings */
        [`${key}BPadding`]: {
          paddingBottom: pv(value),
        },
        [`${key}TPadding`]: {
          paddingTop: pv(value),
        },
        [`${key}RPadding`]: {
          paddingRight: ph(value),
        },
        [`${key}LPadding`]: {
          paddingLeft: ph(value),
        },
        [`${key}VPadding`]: {
          paddingVertical: pv(value),
        },
        [`${key}HPadding`]: {
          paddingHorizontal: ph(value),
        },
      }),
      {},
    ),
  });
}
