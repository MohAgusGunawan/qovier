import convert from 'color-convert';

import { getColorFamily } from '@/src/utils/getColorFamily';

import { rangeColor } from '@/src/data/color';

import { ColorDetail, ColorPair, Conserved } from '@/src/types/ColorType';

export const maxList = 21;

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
