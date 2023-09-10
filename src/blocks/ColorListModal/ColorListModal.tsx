import { useCallback } from 'react';
import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';

import { AiOutlineClose } from 'react-icons/ai';
import { TbCopy } from 'react-icons/tb';

import { colorList } from '@/src/data/colorList';

import styles from './ColorListModal.module.css';

interface Props {
  isOpenModal: boolean;
  closeModal: () => void;
  range: string;
}

const ColorList = ({ isOpenModal, closeModal, range }: Props) => {
  const filteredList = colorList.filter((color) => color.range === range);

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
                  <button
                    className={styles.colorButton}
                    title={`Copy ${item.hexCode}`}
                    onClick={() => handleCopy(item.hexCode.replace('#', ''))}
                  >
                    <span
                      className={styles.colorCard}
                      style={{ background: item.hexCode }}
                    ></span>
                    <span
                      className={`${styles.colorName} ${
                        item.popular ? styles.colorNameBold : null
                      }`}
                    >
                      {item.name}
                    </span>
                    <span className={styles.colorCode}>{item.hexCode}</span>
                  </button>
                </li>
              );
            })}
          </ul>
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
