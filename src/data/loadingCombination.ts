import { maxList } from '@/src/utils/generateCombination';

export const loadingCombination = () => {
  const data = [];

  for (let i = 0; i < maxList; i++) {
    data.push({
      primary: {
        range: 'Moderate',
        name: 'Gray',
        hex: 'b3b3b3',
        hsl: [0, 0, 70],
        rgb: [179, 179, 179],
      },
      secondary: {
        range: 'Moderate',
        name: 'Gray',
        hex: 'cccccc',
        hsl: [0, 0, 80],
        rgb: [204, 204, 204],
      },
    });
  }

  return data;
};
