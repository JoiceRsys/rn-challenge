import {Dimensions, PixelRatio, Platform, ScaledSize} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type Mode = 'width' | 'height';
type Scale = number;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT}: ScaledSize =
  Dimensions.get('window');

const widthScale: Scale = SCREEN_WIDTH / 375;
const heightScale: Scale = SCREEN_HEIGHT / 812;

export const normalize = (size: number, based: Mode = 'width'): number => {
  const newSize: number =
    based === 'height' ? size * heightScale : size * widthScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for width  pixel
export const wp = (size: number | string): number => normalize(+size, 'width');

// for height  pixel
export const hp = (size: number | string): number => normalize(+size, 'height');

// for font  pixel
export const fp = (size: number | string): number => size;

// for Margin and Padding vertical pixel
export const pv = (size: number | string): number => hp(size);

// for Margin and Padding horizontal pixel
export const ph = (size: number | string): number => wp(size);

export const IS_IOS = Platform.OS === 'ios';

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

export const currentDate = new Date();

export const STATUS_BAR_HEIGHT = getStatusBarHeight(false);
