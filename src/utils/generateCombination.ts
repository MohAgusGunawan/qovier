import convert from 'color-convert';

import { getColorFamily } from '@/src/utils/getColorFamily';

import {
  hueLightnessMax,
  hueLightnessMin,
  hueSaturationMin,
} from '@/src/data/color';

import { ColorDetail, ColorPair, Conserved } from '@/src/types/ColorType';

export const maxList = 21;

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

const group = Object.keys(rangeColor);

const isClosed = (primary: ColorDetail, secondary: ColorDetail) => {
  const satPr = primary.hsl[1];
  const satSc = secondary.hsl[1];

  const ligPr = primary.hsl[2];
  const ligSc = secondary.hsl[2];

  const dLig = Math.abs(ligPr - ligSc);
  const dSat = Math.abs(satPr - satSc);

  const s = dSat < 15;
  const l = dLig < 15;

  return s || l;
};

const isAdded = (pair: ColorPair, list: ColorPair[]) => {
  const findPair = list.find((color) => {
    const prmy = color.primary.hsl.toString() === pair.primary.hsl.toString();
    const scnd =
      color.secondary.hsl.toString() === pair.secondary.hsl.toString();

    const prmyScnd =
      color.primary.hsl.toString() === pair.secondary.hsl.toString();
    const scndPrmy =
      color.secondary.hsl.toString() === pair.primary.hsl.toString();

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

const getDetailColor = (colorString: string) => {
  const rgb = convert.hex.rgb(colorString);
  const fixedHexCode = convert.rgb.hex(rgb);

  return {
    range: getColorFamily(colorString),
    name: convert.hex.keyword(colorString),
    hex: fixedHexCode,
    hsl: convert.hex.hsl(colorString),
    rgb: rgb,
  };
};

const getRestoreCombination = (
  combination: ColorPair[],
  conserved: Conserved[]
): ColorPair[] => {
  if (conserved.length <= 0) return combination;

  const colorPairs = combination.slice(conserved.length);

  const sortedConserved = [...conserved].sort((a, b) => {
    const indexA = a.index;
    const indexB = b.index;

    return indexA - indexB;
  });

  sortedConserved.forEach((pair) => {
    colorPairs.splice(pair.index, 0, {
      primary: pair.primary,
      secondary: pair.secondary,
    });
  });

  return colorPairs;
};

export const generateCombination = (
  filterPrimary: string[] | string = [],
  filterSecondary: string[] = [],
  conserved: Conserved[] = []
) => {
  const colorPair = new Array<ColorPair>();
  const fixedConserved = conserved.map((pair) => {
    return {
      primary: pair.primary,
      secondary: pair.secondary,
    };
  });

  colorPair.push(...fixedConserved);

  while (colorPair.length < maxList) {
    const primary =
      typeof filterPrimary === 'string'
        ? getDetailColor(filterPrimary)
        : generateColor(filterPrimary);

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

  return getRestoreCombination(colorPair, conserved);
};
