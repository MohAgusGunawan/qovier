import Color from 'color';

import { getColorFamily } from '@/src/utils/getColorFamily';

import { ColorDetail } from '@/src/types/ColorType';

const generateNumberArray = (startValue: number): number[] => {
  const result = [startValue];

  for (let i = 0; i < 8; i++) {
    if (result[i] + 10 < 100) {
      if (result[i] + 10 <= 20) {
        result.push(result[i] + 20);
      } else {
        result.push(result[i] + 10);
      }
    } else {
      result.unshift(result[0] - 10);
    }
  }

  return result;
};

type Props = {
  currentIndex: number;
  tintShadeColors: ColorDetail[];
};

export const getColorTintShade = (colorDetail: ColorDetail): Props => {
  const color = Color(colorDetail.rgb);
  const lightness = Math.round(color.lightness());
  const arrayLightness = generateNumberArray(lightness);

  const tintShadeColors: ColorDetail[] = [];

  const currentIndex = arrayLightness.findIndex((num) => num === lightness);

  arrayLightness.forEach((value) => {
    if (value === lightness) {
      tintShadeColors.push({
        range: colorDetail.range,
        name: colorDetail.name,
        hex: colorDetail.hex,
        hsl: colorDetail.hsl,
        rgb: colorDetail.rgb,
      });
    } else {
      tintShadeColors.push({
        range: getColorFamily(color.lightness(value).hex()),
        name: color.lightness(value).keyword(),
        hex: color.lightness(value).hex().replace('#', ''),
        hsl: color
          .lightness(value)
          .hsl()
          .array()
          .map((number) => Math.round(number)),
        rgb: color
          .lightness(value)
          .rgb()
          .array()
          .map((number) => Math.round(number)),
      });
    }
  });

  return {
    currentIndex: currentIndex,
    tintShadeColors,
  };
};
