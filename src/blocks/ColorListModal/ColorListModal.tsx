import { Dialog } from '@headlessui/react';

import { AiOutlineClose } from 'react-icons/ai';

import { colorList } from '@/src/data/colorList';

import styles from './ColorListModal.module.css';

interface Props {
  isOpenModal: boolean;
  closeModal: () => void;
  range: string;
}

const ColorList = ({ isOpenModal, closeModal, range }: Props) => {
  const filteredList = colorList.filter((color) => color.range === range);

  return (
    <Dialog open={isOpenModal} onClose={() => closeModal()} as="div">
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
                  {item.popular && <span className={styles.colorRibbon}></span>}

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
  );
};

export default ColorList;
