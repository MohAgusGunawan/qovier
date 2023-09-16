import { useCallback } from 'react';
import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosColorFilter } from 'react-icons/io';
import {
  TbBrightnessUp,
  TbCircleHalf2,
  TbCopy,
  TbMoonFilled,
} from 'react-icons/tb';

import { colorList } from '@/src/data/colorList';
import { rangeColor } from '@/src/data/color';

import styles from './ColorListModal.module.css';

interface Props {
  isOpenModal: boolean;
  closeModal: () => void;
  range: string;
}

const ColorList = ({ isOpenModal, closeModal, range }: Props) => {
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

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast(`"${text}" copied`, {
          icon: <TbCopy />,
        });
      })
      .catch(() => {
        window.alert('Copy failed, please update your browser!');
      });
  }, []);

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
                      {color.popular && (
                        <span className={styles.colorRibbon}></span>
                      )}
                      <button
                        className={styles.colorButton}
                        title={`Copy ${color.hexcode}`}
                        onClick={() => handleCopy(color.hexcode)}
                      >
                        <span
                          className={styles.colorCard}
                          style={{ background: `#${color.hexcode}` }}
                        ></span>
                        <span
                          className={`${styles.colorName} ${
                            color.popular ? styles.colorNameBold : null
                          }`}
                        >
                          {color.name}
                        </span>
                        <span className={styles.colorCode}>
                          #{color.hexcode}
                        </span>
                      </button>
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
                      {color.popular && (
                        <span className={styles.colorRibbon}></span>
                      )}
                      <button
                        className={styles.colorButton}
                        title={`Copy ${color.hexcode}`}
                        onClick={() => handleCopy(color.hexcode)}
                      >
                        <span
                          className={styles.colorCard}
                          style={{ background: `#${color.hexcode}` }}
                        ></span>
                        <span
                          className={`${styles.colorName} ${
                            color.popular ? styles.colorNameBold : null
                          }`}
                        >
                          {color.name}
                        </span>
                        <span className={styles.colorCode}>
                          #{color.hexcode}
                        </span>
                      </button>
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
                      {color.popular && (
                        <span className={styles.colorRibbon}></span>
                      )}
                      <button
                        className={styles.colorButton}
                        title={`Copy ${color.hexcode}`}
                        onClick={() => handleCopy(color.hexcode)}
                      >
                        <span
                          className={styles.colorCard}
                          style={{ background: `#${color.hexcode}` }}
                        ></span>
                        <span
                          className={`${styles.colorName} ${
                            color.popular ? styles.colorNameBold : null
                          }`}
                        >
                          {color.name}
                        </span>
                        <span className={styles.colorCode}>
                          #{color.hexcode}
                        </span>
                      </button>
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
                      {color.popular && (
                        <span className={styles.colorRibbon}></span>
                      )}
                      <button
                        className={styles.colorButton}
                        title={`Copy ${color.hexcode}`}
                        onClick={() => handleCopy(color.hexcode)}
                      >
                        <span
                          className={styles.colorCard}
                          style={{ background: `#${color.hexcode}` }}
                        ></span>
                        <span
                          className={`${styles.colorName} ${
                            color.popular ? styles.colorNameBold : null
                          }`}
                        >
                          {color.name}
                        </span>
                        <span className={styles.colorCode}>
                          #{color.hexcode}
                        </span>
                      </button>
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
