import React, { Fragment, useCallback } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { TbCopy } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';

import { ColorDetail, ColorIconType } from '@/src/types/ColorType';

import styles from './ButtonCopy.module.css';

interface Props {
  color: ColorDetail;
  loading: boolean;
  isLocked: boolean;
}

const ButtonCopy = ({ color, loading, isLocked }: Props) => {
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
    <div className={styles.buttonWrap}>
      <Menu>
        <Menu.Button
          className={styles.menuButton}
          disabled={loading}
          title="Copy"
        >
          <span
            className="colorIcon"
            style={
              {
                '--color': `#${color.hex}`,
              } as ColorIconType
            }
          />
          <span className={styles.mbLabel}>
            {loading && !isLocked ? '#######' : `#${color.hex.toUpperCase()}`}
          </span>
          <IoIosArrowDown />
        </Menu.Button>
        {!loading && (
          <Transition
            as={Fragment}
            enter="at-enterTransition"
            enterFrom="at-fadeSlideOut"
            enterTo="at-fadeSlideIn"
            leave="at-leaveTransition"
            leaveFrom="at-fadeSlideIn"
            leaveTo="at-fadeSlideOut"
          >
            <Menu.Items className={styles.menuItems}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${styles.menuCopyButton} ${
                      active ? styles.menuCopyButtonActive : null
                    }`}
                    onClick={() => handleCopy(color.hex)}
                  >
                    <TbCopy />
                    <span>HEX ({color.hex.toLocaleUpperCase()})</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${styles.menuCopyButton} ${
                      active ? styles.menuCopyButtonActive : null
                    }`}
                    onClick={() => handleCopy(String(color.rgb))}
                  >
                    <TbCopy />
                    <span>RGB ({String(color.rgb)})</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${styles.menuCopyButton} ${
                      active ? styles.menuCopyButtonActive : null
                    }`}
                    onClick={() =>
                      handleCopy(
                        `${color.hsl[0]}°,${color.hsl[1]}%,${color.hsl[2]}%`
                      )
                    }
                  >
                    <TbCopy />
                    <span>HSL ({String(color.hsl)})</span>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        )}
      </Menu>
    </div>
  );
};

export default ButtonCopy;
