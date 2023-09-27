import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosColorFilter } from 'react-icons/io';
import { TbBrightnessUp, TbCircleHalf2, TbMoonFilled } from 'react-icons/tb';

import ColorButton from '@/src/elements/ColorButton/ColorButton';

import {
  hueLightnessMax,
  hueLightnessMin,
  hueSaturationMin,
} from '@/src/data/color';

import { getColorList } from '@/src/utils/getColorList';

import { ColorList } from '@/src/types/ColorType';

import styles from './ColorListModal.module.css';

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

interface Props {
  isOpenModal: boolean;
  closeModal: () => void;
  range: string;
}

const ColorList = ({ isOpenModal, closeModal, range }: Props) => {
  const colorList: ColorList[] = getColorList();

  const fixedRange = range.toLowerCase().replace(' ', '');

  const filteredList = colorList
    .filter((color) => {
      const hue = color.hue + 360 >= 375 ? color.hue : color.hue + 360;

      const typeRange = fixedRange;

      if (range === 'Neutral') {
        return color.saturation <= 0;
      }

      return (
        hue < rangeColor[typeRange as keyof typeof rangeColor].hue.max &&
        hue >= rangeColor[typeRange as keyof typeof rangeColor].hue.min &&
        color.saturation > 0
      );
    })
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

  const generalList = filteredList.filter((color) => {
    const saturation = color.saturation;
    const lightness = color.lightness;

    const typeRange = fixedRange;

    return (
      saturation <
        rangeColor[typeRange as keyof typeof rangeColor].saturation.max &&
      saturation >=
        rangeColor[typeRange as keyof typeof rangeColor].saturation.min &&
      lightness <
        rangeColor[typeRange as keyof typeof rangeColor].lightness.max &&
      lightness >=
        rangeColor[typeRange as keyof typeof rangeColor].lightness.min
    );
  });

  const dimList = filteredList.filter((color) => {
    const saturation = color.saturation;
    const lightness = color.lightness;

    const typeRange = 'dim';

    return (
      saturation < rangeColor[typeRange].saturation.max &&
      saturation >= rangeColor[typeRange].saturation.min &&
      lightness < rangeColor[typeRange].lightness.max &&
      lightness >= rangeColor[typeRange].lightness.min
    );
  });

  const moderateList = filteredList.filter((color) => {
    const saturation = color.saturation;
    const lightness = color.lightness;

    const typeRange = 'moderate';

    return (
      saturation < rangeColor[typeRange].saturation.max &&
      saturation >= rangeColor[typeRange].saturation.min &&
      lightness < rangeColor[typeRange].lightness.max &&
      lightness >= rangeColor[typeRange].lightness.min
    );
  });

  const brightList = filteredList.filter((color) => {
    const saturation = color.saturation;
    const lightness = color.lightness;

    const typeRange = 'bright';

    return (
      saturation < rangeColor[typeRange].saturation.max &&
      saturation >= rangeColor[typeRange].saturation.min &&
      lightness < rangeColor[typeRange].lightness.max &&
      lightness >= rangeColor[typeRange].lightness.min
    );
  });

  return (
    <Dialog open={isOpenModal} onClose={() => closeModal()}>
      <div className={styles.modalBackdrop} aria-hidden="true" />

      <Dialog.Panel className={styles.modalPanel}>
        <div className={styles.modalHeader}>
          <h3 className={styles.title}>• {range} Range •</h3>
          <button
            className={styles.buttonClose}
            aria-label="Close Modal"
            onClick={() => closeModal()}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className={styles.modalContent}>
          {generalList.length >= 1 && range !== 'Neutral' && (
            <div className={styles.sectionColors}>
              <h4 className={styles.sectionColorsTitle}>
                <span>--</span>
                <IoIosColorFilter />
                <span>General</span>
              </h4>
              <ul className={styles.boxColor}>
                {generalList.map((color, index) => {
                  return (
                    <li key={index} className={styles.itemColor}>
                      <ColorButton color={color} />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {dimList.length >= 1 && (
            <div className={styles.sectionColors}>
              <h4 className={styles.sectionColorsTitle}>
                <span>--</span>
                <TbMoonFilled />
                <span>Dim</span>
              </h4>
              <ul className={styles.boxColor}>
                {dimList.map((color, index) => {
                  return (
                    <li key={index} className={styles.itemColor}>
                      <ColorButton color={color} />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {moderateList.length >= 1 && (
            <div className={styles.sectionColors}>
              <h4 className={styles.sectionColorsTitle}>
                <span>--</span>
                <TbCircleHalf2 />
                <span>Moderate</span>
              </h4>
              <ul className={styles.boxColor}>
                {moderateList.map((color, index) => {
                  return (
                    <li key={index} className={styles.itemColor}>
                      <ColorButton color={color} />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {brightList.length >= 1 && (
            <div className={styles.sectionColors}>
              <h4 className={styles.sectionColorsTitle}>
                <span>--</span>
                <TbBrightnessUp />
                <span>Bright</span>
              </h4>
              <ul className={styles.boxColor}>
                {brightList.map((color, index) => {
                  return (
                    <li key={index} className={styles.itemColor}>
                      <ColorButton color={color} />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.modalFooterBorder}>
          <p className={styles.modalFooterHint}>
            *Click the card to copy the color code!
          </p>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ColorList;
