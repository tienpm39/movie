import { PixelRatio } from 'react-native'


const scaleValue = PixelRatio.get() / 2;

export const scaleWithPixel = (size, limitScale = 1.2) => {
    const value = scaleValue > limitScale ? limitScale : scaleValue;
    return size * value;
};
