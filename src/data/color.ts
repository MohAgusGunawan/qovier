export const hueSaturationMin = 30;
export const hueLightnessMin = 25;
export const hueLightnessMax = 85;

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

export const colors = [
  {
    name: 'All',
    displayColor: {
      circle:
        'linear-gradient(49deg, rgba(255,170,0,1) 0%, rgba(85,255,0,1) 22%, rgba(0,255,170,1) 50%, rgba(0,85,255,1) 78%, rgba(170,0,255,1) 100%)',
      gradientEnd: '#dadada',
    },
  },
  {
    name: 'Red',
    displayColor: {
      circle: '#ff0000',
      gradientEnd: '#ff0000',
    },
  },
  {
    name: 'Orange',
    displayColor: {
      circle: '#ff8000',
      gradientEnd: '#ff8000',
    },
  },
  {
    name: 'Yellow',
    displayColor: {
      circle: '#ffff00',
      gradientEnd: '#ffff00',
    },
  },
  {
    name: 'Chartreuse',
    displayColor: {
      circle: '#80ff00',
      gradientEnd: '#80ff00',
    },
  },
  {
    name: 'Green',
    displayColor: {
      circle: '#00ff00',
      gradientEnd: '#00ff00',
    },
  },
  {
    name: 'Spring Green',
    displayColor: {
      circle: '#00ff80',
      gradientEnd: '#00ff80',
    },
  },
  {
    name: 'Cyan',
    displayColor: {
      circle: '#00ffff',
      gradientEnd: '#00ffff',
    },
  },
  {
    name: 'Azure',
    displayColor: {
      circle: '#0080ff',
      gradientEnd: '#0080ff',
    },
  },
  {
    name: 'Blue',
    displayColor: {
      circle: '#0000ff',
      gradientEnd: '#0000ff',
    },
  },
  {
    name: 'Violet',
    displayColor: {
      circle: '#8000ff',
      gradientEnd: '#8000ff',
    },
  },
  {
    name: 'Magenta',
    displayColor: {
      circle: '#ff00ff',
      gradientEnd: '#ff00ff',
    },
  },
  {
    name: 'Rose',
    displayColor: {
      circle: '#ff0080',
      gradientEnd: '#ff0080',
    },
  },
  {
    name: 'Dim', // Black
    displayColor: {
      circle: '#000000',
      gradientEnd: '#000000',
    },
  },
  {
    name: 'Moderate', // Gray
    displayColor: {
      circle: '#808080',
      gradientEnd: '#808080',
    },
  },
  {
    name: 'Bright', // White
    displayColor: {
      circle: '#FFFFFF',
      gradientEnd: '#dadada',
    },
  },
];

export const colorThumbnail = [
  {
    name: 'Red',
    hexcode: '#FF0000',
  },
  {
    name: 'Orange',
    hexcode: '#FF8000',
  },
  {
    name: 'Yellow',
    hexcode: '#FFFF00',
  },

  {
    name: 'Chartreuse',
    hexcode: '#80FF00',
  },

  {
    name: 'Green',
    hexcode: '#00FF00',
  },

  {
    name: 'Spring Green',
    hexcode: '#00FF80',
  },

  {
    name: 'Cyan',
    hexcode: '#00FFFF',
  },

  {
    name: 'Azure',
    hexcode: '#007FFF',
  },

  {
    name: 'Blue',
    hexcode: '#0000FF',
  },

  {
    name: 'Violet',
    hexcode: '#8000FF',
  },

  {
    name: 'Magenta',
    hexcode: '#FF00FF',
  },

  {
    name: 'Rose',
    hexcode: '#FF0080',
  },

  {
    name: 'Neutral',
    hexcode: '#808080',
  },
];

export const secondaryColors = colors.filter((color) => color.name !== 'All');

export const excludeColors = ['All', 'Dim', 'Moderate', 'Bright'];

export const nameHueColors = colors
  .filter((color) => !excludeColors.includes(color.name))
  .map((color) => color.name);

export const harmonyColor = [
  'Monochromatic',
  'Analogous',
  'Tetradic',
  'Square',
  'Triadic, Tetradic',
  'Split Complementary',
  'Complementary, Square, Tetadric',
  'Split Complementary',
  'Triadic, Tetradic',
  'Square',
  'Tetradic',
  'Analogous',
  'Monochromatic',
];
