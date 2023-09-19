import { useCallback, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { toast } from 'react-toastify';
import fontColorContrast from 'font-color-contrast';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCheck, TbCopy } from 'react-icons/tb';

import { useAppDispatch } from '@/src/redux/hooks';
import { removeItem } from '@/src/redux/features/collectionSlice';

import { getColorTintShade } from '@/src/utils/getColorTintShade';

import { Collection, CustomColorType } from '@/src/types/ColorType';

import styles from './CollectionItem.module.css';

interface Props {
  data: Collection;
  num: number;
}

const CollectionItem = ({ data, num }: Props) => {
  const primary = data.colorPair.primary;
  const secondary = data.colorPair.secondary;

  const colorPrimary = getColorTintShade(primary);
  const colorSecondary = getColorTintShade(secondary);

  const [confirm, setConfirm] = useState(false);
  const [selectPrimary, setSelectPrimary] = useState(
    () => colorPrimary.currentIndex
  );
  const [selectSecondary, setSelectSecondary] = useState(
    () => colorSecondary.currentIndex
  );

  const dispatch = useAppDispatch();

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

  const closeDisclosure = () => {
    setConfirm(false);
    setSelectPrimary(colorPrimary.currentIndex);
    setSelectSecondary(colorSecondary.currentIndex);
  };

  const removeFromCollection = () => {
    dispatch(removeItem(data.id));
  };

  return (
    <Disclosure>
      {({ open }) => (
        <div className={styles.boxItem}>
          <Disclosure.Button
            className={styles.disclosureButton}
            onClick={() => closeDisclosure()}
          >
            <span className={styles.colorDescription}>
              <span className={styles.colorIndexNumber}>{num + 1}</span>
              <span
                className={styles.colorIcon}
                style={
                  {
                    '--first-color': `#${primary.hex}`,
                    '--second-color': `#${secondary.hex}`,
                  } as CustomColorType
                }
              ></span>
              <span className={styles.colorCode}>
                #{primary.hex} <b>\</b> #{secondary.hex}
              </span>
            </span>

            <span className={styles.colorAction}>
              {data.target !== 'Default' && (
                <span className={styles.colorTarget}>{data.target}</span>
              )}

              <IoIosArrowDown
                className={`${styles.arrowIcon} ${
                  open ? styles.arrowIconOpen : null
                }`}
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className={styles.disclosurePanel}>
              <div className={styles.tintShadeWrapper}>
                <div className={styles.tintShadeColors}>
                  {colorPrimary.tintShadeColors.map((color, index) => {
                    return (
                      <label
                        key={index}
                        className={`${styles.tintShadeSelect} ${
                          index === selectPrimary
                            ? styles.tintShadeSelectActive
                            : null
                        }`}
                        style={{ background: `#${color.hex}` }}
                      >
                        <input
                          type="radio"
                          name="select-primary"
                          id={`color-${color.hex}`}
                          defaultChecked={index === selectPrimary}
                          onChange={() => setSelectPrimary(index)}
                          value={index}
                        />

                        {index === selectPrimary && (
                          <TbCheck
                            style={{ color: fontColorContrast(color.hex) }}
                          />
                        )}

                        <span className={styles.radioSpan}></span>
                      </label>
                    );
                  })}
                </div>
                <div className={styles.tintShadeColors}>
                  {colorSecondary.tintShadeColors.map((color, index) => {
                    return (
                      <label
                        key={index}
                        className={`${styles.tintShadeSelect} ${
                          index === selectPrimary
                            ? styles.tintShadeSelectActive
                            : null
                        }`}
                        style={{ background: `#${color.hex}` }}
                      >
                        <input
                          type="radio"
                          name="select-secondary"
                          id={`color-${color.hex}`}
                          defaultChecked={index === selectSecondary}
                          onChange={() => setSelectSecondary(index)}
                          value={index}
                        />

                        {index === selectSecondary && (
                          <TbCheck
                            style={{ color: fontColorContrast(color.hex) }}
                          />
                        )}

                        <span className={styles.radioSpan}></span>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className={styles.colorGroupWrapper}>
                <ul className={styles.colorGroup}>
                  <li className={styles.colorList}>
                    <span>
                      <b>Hex</b> :{' '}
                      {colorPrimary.tintShadeColors[selectPrimary].hex}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy Hex"
                      onClick={() =>
                        handleCopy(
                          colorPrimary.tintShadeColors[selectPrimary].hex
                        )
                      }
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>RGB</b> :{' '}
                      {String(colorPrimary.tintShadeColors[selectPrimary].rgb)}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy RGB"
                      onClick={() =>
                        handleCopy(
                          String(
                            colorPrimary.tintShadeColors[selectPrimary].rgb
                          )
                        )
                      }
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>HSL</b> :{' '}
                      {`${colorPrimary.tintShadeColors[selectPrimary].hsl[0]}°,${colorPrimary.tintShadeColors[selectPrimary].hsl[1]}%,${colorPrimary.tintShadeColors[selectPrimary].hsl[2]}%`}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy HSL"
                      onClick={() =>
                        handleCopy(
                          `${colorPrimary.tintShadeColors[selectPrimary].hsl[0]}°,${colorPrimary.tintShadeColors[selectPrimary].hsl[1]}%,${colorPrimary.tintShadeColors[selectPrimary].hsl[2]}%`
                        )
                      }
                    >
                      <TbCopy />
                    </button>
                  </li>
                </ul>
                <ul className={styles.colorGroup}>
                  <li className={styles.colorList}>
                    <span>
                      <b>Hex</b> :{' '}
                      {colorSecondary.tintShadeColors[selectSecondary].hex}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy Hex"
                      onClick={() =>
                        handleCopy(
                          colorSecondary.tintShadeColors[selectSecondary].hex
                        )
                      }
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>RGB</b> :{' '}
                      {String(
                        colorSecondary.tintShadeColors[selectSecondary].rgb
                      )}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy RGB"
                      onClick={() =>
                        handleCopy(
                          String(
                            colorSecondary.tintShadeColors[selectSecondary].rgb
                          )
                        )
                      }
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>HSL</b> :{' '}
                      {`${colorSecondary.tintShadeColors[selectSecondary].hsl[0]}°,${colorSecondary.tintShadeColors[selectSecondary].hsl[1]}%,${colorSecondary.tintShadeColors[selectSecondary].hsl[2]}%`}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy HSL"
                      onClick={() =>
                        handleCopy(
                          `${colorSecondary.tintShadeColors[selectSecondary].hsl[0]}°,${colorSecondary.tintShadeColors[selectSecondary].hsl[1]}%,${colorSecondary.tintShadeColors[selectSecondary].hsl[2]}%`
                        )
                      }
                    >
                      <TbCopy />
                    </button>
                  </li>
                </ul>
              </div>
              <div className={styles.deleteWrapper}>
                {confirm === false && (
                  <button
                    className={styles.removeButton}
                    onClick={() => setConfirm(true)}
                  >
                    Remove
                  </button>
                )}
                {confirm === true && (
                  <>
                    <button
                      className={styles.removeButtonConfirm}
                      onClick={() => removeFromCollection()}
                    >
                      Yes, remove it!
                    </button>
                    <button
                      className={styles.cancelButton}
                      onClick={() => setConfirm(false)}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default CollectionItem;
