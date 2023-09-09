import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import fontColorContrast from 'font-color-contrast';
import { AiOutlineClose } from 'react-icons/ai';

import { colorList } from '@/src/data/colorList';

import styles from './ColorList.module.css';

const ColorList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState('Neutral');

  const filteredList = colorList.filter((color) => color.range === range);

  const openModal = (rangeColor: string) => {
    console.log(rangeColor);
    setRange(rangeColor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setRange('Neutral');
  };

  return (
    <>
      <div className={styles.colorList}>
        <div className="wrapper">
          <h2 className={styles.heading}>Color List</h2>
          <p className={styles.paragraph}>
            Among the millions of colors available, here are some colors that we
            may already recognize based on their hue range. These colors can be
            used as color references the most likely filter to appear in the
            color results above. Click the card to see all color list!
          </p>

          <div className={styles.colorContainer}>
            {colorList.map((color, index) => {
              return (
                <div className={styles.colorGroup} key={index}>
                  <button
                    className={styles.colorGroupButton}
                    style={{
                      background: color.hexCode,
                      color: fontColorContrast(color.hexCode),
                    }}
                    title={`${color.range} range`}
                    onClick={() => openModal(color.range)}
                  >
                    <span className={styles.colorGroupButtonLabel}>
                      {color.range}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* {colorList.map((color, index) => {
          return (
            <div
              key={index}
              className={styles.containerList}
              id={color.range.toLocaleLowerCase().replace(' ', '-')}
            >
              <h3 className={styles.title}>▪ {color.range} Range ▪</h3>
              <ul className={styles.boxColor}>
                {color.list.map((item, index) => {
                  return (
                    <li key={index} className={styles.itemColor}>
                      {item.popular && (
                        <span className={styles.colorRibbon}></span>
                      )}

                      <div
                        className={styles.colorCard}
                        style={{ background: item.hexCode }}
                      ></div>
                      <p
                        className={`${styles.colorName} ${
                          item.popular ? styles.colorNameBold : null
                        }`}
                      >
                        {item.name}
                      </p>
                      <p className={styles.colorCode}>{item.hexCode}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })} */}
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => closeModal()} as="div">
        <div className={styles.modalBackdrop} aria-hidden="true" />

        <Dialog.Panel className={styles.modalPanel}>
          <div className={styles.modalHeader}>
            <h3 className={styles.title}>• {filteredList[0].range} Range •</h3>
            <button
              className={styles.buttonClose}
              aria-label="Close Modal"
              onClick={() => closeModal()}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className={styles.modalContent}>
            <ul className={styles.boxColor}>
              {filteredList[0].list.map((item, index) => {
                return (
                  <li key={index} className={styles.itemColor}>
                    {item.popular && (
                      <span className={styles.colorRibbon}></span>
                    )}

                    <div
                      className={styles.colorCard}
                      style={{ background: item.hexCode }}
                    ></div>
                    <p
                      className={`${styles.colorName} ${
                        item.popular ? styles.colorNameBold : null
                      }`}
                    >
                      {item.name}
                    </p>
                    <p className={styles.colorCode}>{item.hexCode}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.modalFooterBorder}></div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default ColorList;
