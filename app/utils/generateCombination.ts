import convert from 'color-convert';

import { ColorDetail, ColorPair } from '@app/types/ColorType';

const hueSaturationMin = 30;
const hueLightnessMin = 30;
const hueLightnessMax = 85;

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
  black: {
    hue: {
      min: 0,
      max: 360,
    },
    saturation: {
      min: 0,
      max: 0,
    },
    lightness: {
      min: 0,
      max: 31,
    },
  },
  gray: {
    hue: {
      min: 0,
      max: 360,
    },
    saturation: {
      min: 0,
      max: 0,
    },
    lightness: {
      min: 30,
      max: 71,
    },
  },
  white: {
    hue: {
      min: 0,
      max: 360,
    },
    saturation: {
      min: 0,
      max: 0,
    },
    lightness: {
      min: 70,
      max: 101,
    },
  },
};

const group = Object.keys(rangeColor);

export const maxList = 21;

const isClosed = (primary: ColorDetail, secondary: ColorDetail) => {
  const ligPr = primary.hsl[2];
  const ligSc = secondary.hsl[2];

  const dLig = Math.abs(ligPr - ligSc);

  const l = dLig < 10;

  return l;
};

const isAdded = (pair: ColorPair, list: ColorPair[]) => {
  const findPair = list.find((color) => {
    const prmy = color.primary.hsl === pair.primary.hsl;
    const scnd = color.secondary.hsl === pair.secondary.hsl;

    const prmyScnd = color.primary.hsl === pair.secondary.hsl;
    const scndPrmy = color.secondary.hsl === pair.primary.hsl;

    return (prmy && scnd) || (prmyScnd && scndPrmy);
  });

  return findPair;
};

const getRandom = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);

  return result >= 360 ? result - 360 : result;
};

const generateColor = (filter: string[]) => {
  let color;
  let range;

  if (filter.length <= 0) {
    const length = group.length;

    color = group[getRandom(0, length)];
    range = rangeColor[color as keyof typeof rangeColor];
  } else {
    const length = filter.length;

    color = filter[getRandom(0, length)];
    range = rangeColor[color as keyof typeof rangeColor];
  }

  const hue = getRandom(range.hue.min, range.hue.max);
  const saturation = getRandom(range.saturation.min, range.saturation.max);
  const lightness = getRandom(range.lightness.min, range.lightness.max);

  return {
    range: color,
    name: convert.hsl.keyword([hue, saturation, lightness]),
    hex: convert.hsl.hex([hue, saturation, lightness]),
    hsl: [hue, saturation, lightness],
    rgb: convert.hsl.rgb([hue, saturation, lightness]),
  };
};

export const generateCombination = (
  filterPrimary: string[] = [],
  filterSecondary: string[] = []
) => {
  const colorPair = new Array<ColorPair>();

  while (colorPair.length < maxList) {
    const primary = generateColor(filterPrimary);
    let secondary;

    do {
      secondary = generateColor(filterSecondary);
    } while (isClosed(primary, secondary));

    const pair = {
      primary,
      secondary,
    };

    if (isAdded(pair, colorPair) === undefined) {
      colorPair.push(pair);
    }
  }

  return colorPair;
};
