import Color from 'color';

import { getColorFamily } from '@/src/utils/getColorFamily';

import { ColorDetail } from '@/src/types/ColorType';

type Props = {
  currentIndex: number;
  tintShadeColors: ColorDetail[];
};

export const getColorTintShade = (colorDetail: ColorDetail): Props => {
  const color = Color(colorDetail.rgb);
  const lightness = color.lightness();
  const tintShadeColors = [];

  let currentIndex = () => {
    const index = Math.round(lightness / 10);

    if (index < 2) return 1;
    if (index > 8) return 9;
    return index;
  };

  for (let index = 0; index < 9; index++) {
    if (index + 1 === currentIndex()) {
      tintShadeColors.push({
        range: colorDetail.range,
        name: colorDetail.name,
        hex: colorDetail.hex,
        hsl: colorDetail.hsl,
        rgb: colorDetail.rgb,
      });
    } else {
      tintShadeColors.push({
        range: getColorFamily(color.lightness((index + 1) * 10).hex()),
        name: color.lightness((index + 1) * 10).keyword(),
        hex: color
          .lightness((index + 1) * 10)
          .hex()
          .replace('#', ''),
        hsl: color
          .lightness((index + 1) * 10)
          .hsl()
          .array()
          .map((number) => Math.round(number)),
        rgb: color
          .lightness((index + 1) * 10)
          .rgb()
          .array()
          .map((number) => Math.round(number)),
      });
    }
  }

  return {
    currentIndex: currentIndex(),
    tintShadeColors,
  };
};
