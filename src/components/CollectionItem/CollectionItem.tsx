import { useCallback, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { toast } from 'react-toastify';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';

import { useAppDispatch } from '@/src/redux/hooks';
import { removeItem } from '@/src/redux/features/collectionSlice';

import { Collection, CustomColorType } from '@/src/types/ColorType';

import styles from './CollectionItem.module.css';

interface Props {
  data: Collection;
  num: number;
}

const CollectionItem = ({ data, num }: Props) => {
  const [confirm, setConfirm] = useState(false);

  const dispatch = useAppDispatch();

  const primary = data.colorPair.primary;
  const secondary = data.colorPair.secondary;

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

  const removeFromCollection = () => {
    dispatch(removeItem(data.id));
  };

  return (
    <Disclosure>
      {({ open }) => (
        <div className={styles.boxItem}>
          <Disclosure.Button
            className={styles.disclosureButton}
            onClick={() => setConfirm(false)}
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
              <div className={styles.colorGroupWrapper}>
                <ul className={styles.colorGroup}>
                  <li className={styles.colorList}>
                    <span>
                      <b>Hex</b> : {primary.hex}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy Hex"
                      onClick={() => handleCopy(primary.hex)}
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>RGB</b> : {String(primary.rgb)}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy RGB"
                      onClick={() => handleCopy(String(primary.rgb))}
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>HSL</b> :{' '}
                      {`${primary.hsl[0]}°,${primary.hsl[1]}%,${primary.hsl[2]}%`}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy HSL"
                      onClick={() =>
                        handleCopy(
                          `${primary.hsl[0]}°,${primary.hsl[1]}%,${primary.hsl[2]}%`
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
                      <b>Hex</b> : {secondary.hex}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy Hex"
                      onClick={() => handleCopy(secondary.hex)}
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>RGB</b> : {String(secondary.rgb)}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy RGB"
                      onClick={() => handleCopy(String(secondary.rgb))}
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>HSL</b> :{' '}
                      {`${secondary.hsl[0]}°,${secondary.hsl[1]}%,${secondary.hsl[2]}%`}
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy HSL"
                      onClick={() =>
                        handleCopy(
                          `${secondary.hsl[0]}°,${secondary.hsl[1]}%,${secondary.hsl[2]}%`
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
