import convert from 'color-convert';

import { rangeColor } from '@/src/data/color';

export const getColorFamily = (hexColor: string): string => {
  const hsl = convert.hex.hsl(hexColor);
  const group = Object.keys(rangeColor);

  const findRangeColor = Object.values(rangeColor).findIndex((color) => {
    const fixHueRange = hsl[0] + 360 >= 375 ? hsl[0] : hsl[0] + 360;
    const hueRange =
      fixHueRange >= color.hue.min && fixHueRange < color.hue.max;
    const saturationRange =
      hsl[1] >= color.saturation.min && hsl[1] < color.saturation.max;
    const lightnessRange =
      hsl[2] >= color.lightness.min && hsl[2] < color.lightness.max;

    return hueRange && saturationRange && lightnessRange;
  });

  const colorFamily = group[findRangeColor];

  if (colorFamily === undefined) return 'All';

  if (colorFamily === 'springgreen') return 'Spring Green';

  return colorFamily.charAt(0).toUpperCase() + colorFamily.slice(1);
};
