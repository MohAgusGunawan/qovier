import convert from 'color-convert';

import {
  hueLightnessMax,
  hueLightnessMin,
  hueSaturationMin,
} from '@/src/data/color';

const rangeColor = {
  red: {
    hue: {
      min: 345,
      max: 375,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  orange: {
    hue: {
      min: 15,
      max: 45,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  yellow: {
    hue: {
      min: 45,
      max: 75,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  chartreuse: {
    hue: {
      min: 75,
      max: 105,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  green: {
    hue: {
      min: 105,
      max: 135,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  springgreen: {
    hue: {
      min: 135,
      max: 165,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  cyan: {
    hue: {
      min: 165,
      max: 195,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  azure: {
    hue: {
      min: 195,
      max: 225,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  blue: {
    hue: {
      min: 225,
      max: 255,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  violet: {
    hue: {
      min: 255,
      max: 285,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  magenta: {
    hue: {
      min: 285,
      max: 315,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  rose: {
    hue: {
      min: 315,
      max: 345,
    },
    saturation: {
      min: hueSaturationMin,
      max: 101,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  dim: {
    // Black
    hue: {
      min: 0,
      max: 361,
    },
    saturation: {
      min: 0,
      max: 101,
    },
    lightness: {
      min: 0,
      max: hueLightnessMin,
    },
  },
  moderate: {
    // Gray
    hue: {
      min: 0,
      max: 361,
    },
    saturation: {
      min: 0,
      max: hueSaturationMin,
    },
    lightness: {
      min: hueLightnessMin,
      max: hueLightnessMax,
    },
  },
  bright: {
    // White
    hue: {
      min: 0,
      max: 361,
    },
    saturation: {
      min: 0,
      max: 101,
    },
    lightness: {
      min: hueLightnessMax,
      max: 101,
    },
  },
  neutral: {
    // Neutral
    hue: {
      min: 0,
      max: 1,
    },
    saturation: {
      min: 0,
      max: 1,
    },
    lightness: {
      min: 0,
      max: 101,
    },
  },
};

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
