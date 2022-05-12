import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type StyleType = TextStyle & ViewStyle & ImageStyle;
export type ThemeLayout = {[key: string]: StyleType};
export type ThemeMetricsSizes = {[key: string]: number | string};
export type ThemeGutters = {[key: string]: StyleType};
export type ThemeVariables = {
  MetricsSizes: ThemeMetricsSizes;
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 5
const small = 8; // 8
const regular = 16; // 16
const medium = 20; // 20
const medium2 = 24; // 24
const large = 30; // 30
const xl = 40; // 40
const xxxl = 60; // 60
const xxl = 50; // 50

export const MetricsSizes: ThemeMetricsSizes = {
  tiny,
  small,
  regular,
  medium,
  medium2,
  large,
  xl,
  xxl,
  xxxl,
};
