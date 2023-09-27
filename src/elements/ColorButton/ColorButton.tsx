'use client';

import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { TbCopy } from 'react-icons/tb';

import { ColorList } from '@/src/types/ColorType';

import styles from './ColorButton.module.css';

interface Props {
  color: ColorList;
}

const ColorButton = ({ color }: Props) => {
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
    <>
      {color.popular && <span className={styles.colorRibbon}></span>}
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
        <span className={styles.colorCode}>#{color.hexcode}</span>
      </button>
    </>
  );
};

export default ColorButton;
