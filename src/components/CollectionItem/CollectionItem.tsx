import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { BsDot } from 'react-icons/bs';
import { TbCopy } from 'react-icons/tb';

import { CustomColorType } from '@/src/types/ColorType';

import styles from './CollectionItem.module.css';

function CollectionItem() {
  const [confirm, setConfirm] = useState(false);
  return (
    <Disclosure>
      {({ open }) => (
        <div className={styles.boxItem}>
          <Disclosure.Button
            className={styles.disclosureButton}
            onClick={() => setConfirm(false)}
          >
            <span className={styles.colorTitle}>
              <BsDot />
              <span
                className={styles.colorIcon}
                style={
                  {
                    '--first-color': `#FFDEA2`,
                    '--second-color': `#CCDE2A`,
                  } as CustomColorType
                }
              ></span>
              <span className={styles.colorCode}>
                FFDEA2 <b>\</b> CCDE2A
              </span>
            </span>
            <IoIosArrowDown
              className={`${styles.arrowIcon} ${
                open ? styles.arrowIconOpen : null
              }`}
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className={styles.disclosurePanel}>
              <div className={styles.colorGroupWrapper}>
                <ul className={styles.colorGroup}>
                  <li className={styles.colorList}>
                    <span>
                      <b>Hex</b> : FFDEA2
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy Hex"
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>RGB</b> : 191,165,248
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy RGB"
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>HSL</b> : 297°,91%,9%
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy HSL"
                    >
                      <TbCopy />
                    </button>
                  </li>
                </ul>
                <ul className={styles.colorGroup}>
                  <li className={styles.colorList}>
                    <span>
                      <b>Hex</b> : CCDE2A
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy Hex"
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>RGB</b> : 191,165,248
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy RGB"
                    >
                      <TbCopy />
                    </button>
                  </li>
                  <li className={styles.colorList}>
                    <span>
                      <b>HSL</b> : 297°,91%,9%
                    </span>
                    <button
                      aria-label="copy"
                      className={styles.colorCopyButton}
                      title="Copy HSL"
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
                    <button className={styles.removeButtonConfirm}>
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
}

export default CollectionItem;
