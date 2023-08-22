'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';
import { toast } from 'react-toastify';

import { useAppSelector } from '@app/redux/hooks';

import {
  ColorPair,
  CustomColorType,
  ColorIconType,
} from '@app/types/ColorType';

import styles from './Card.module.css';

type Props = {
  data: ColorPair;
};

const Card = ({ data }: Props) => {
  const { loading } = useAppSelector((state) => state.combination);

  const primary = data.primary;
  const secondary = data.secondary;

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast(`"${text}" copied`);
      })
      .catch(() => {
        window.alert('Copy failed, please update your browser!');
      });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardDisplay}>
        {loading ? (
          <div
            className={`${styles.cardPairColor} ${styles.sparklingAnimation}`}
            style={
              {
                '--first-color': `#${primary.hex}`,
                '--second-color': `#${secondary.hex}`,
              } as CustomColorType
            }
          />
        ) : (
          <div
            className={styles.cardPairColor}
            style={
              {
                '--first-color': `#${primary.hex}`,
                '--second-color': `#${secondary.hex}`,
              } as CustomColorType
            }
          />
        )}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardButtonWrap}>
          <div className={styles.buttonWrap}>
            <Menu>
              <Menu.Button className={styles.menuButton} disabled={loading}>
                <span
                  className="colorIcon"
                  style={
                    {
                      '--color': `#${primary.hex}`,
                    } as ColorIconType
                  }
                />
                <span className={styles.mbLabel}>
                  {loading ? '#######' : `#${primary.hex.toUpperCase()}`}
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
                          onClick={() => handleCopy(primary.hex)}
                        >
                          <TbCopy />
                          <span>HEX ({primary.hex.toLocaleUpperCase()})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(String(primary.rgb))}
                        >
                          <TbCopy />
                          <span>RGB ({String(primary.rgb)})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(String(primary.hsl))}
                        >
                          <TbCopy />
                          <span>HSL ({String(primary.hsl)})</span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              )}
            </Menu>
          </div>
          <div className={styles.buttonWrap}>
            <Menu>
              <Menu.Button className={styles.menuButton} disabled={loading}>
                <span
                  className="colorIcon"
                  style={
                    {
                      '--color': `#${secondary.hex}`,
                    } as ColorIconType
                  }
                />
                <span className={styles.mbLabel}>
                  {loading ? '#######' : `#${secondary.hex.toUpperCase()}`}
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
                          onClick={() => handleCopy(secondary.hex)}
                        >
                          <TbCopy />
                          <span>HEX ({secondary.hex.toLocaleUpperCase()})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(String(secondary.rgb))}
                        >
                          <TbCopy />
                          <span>RGB ({String(secondary.rgb)})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(String(secondary.hsl))}
                        >
                          <TbCopy />
                          <span>HSL ({String(secondary.hsl)})</span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
