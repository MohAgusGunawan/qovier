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
    name: 'Neutral', // Gray
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

export const secondaryColors = colors.filter((color) => color.name !== 'All');

export const excludeColors = ['All', 'Dim', 'Neutral', 'Bright'];

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
