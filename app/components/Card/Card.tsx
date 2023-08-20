'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';

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
  const primary = data.primary;
  const secondary = data.secondary;

  return (
    <div className={styles.card}>
      <div className={styles.cardDisplay}>
        <div
          className={styles.cardPairColor}
          style={
            {
              '--first-color': `#${primary.hex}`,
              '--second-color': `#${secondary.hex}`,
            } as CustomColorType
          }
        />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardButtonWrap}>
          <div className={styles.buttonWrap}>
            <Menu>
              <Menu.Button className={styles.menuButton}>
                <span
                  className="colorIcon"
                  style={
                    {
                      '--color': `#${primary.hex}`,
                    } as ColorIconType
                  }
                />
                <span
                  className={styles.mbLabel}
                >{`#${primary.hex.toLocaleUpperCase()}`}</span>
                <IoIosArrowDown />
              </Menu.Button>
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
                      >
                        <TbCopy />
                        <span>HEX - ({primary.hex.toLocaleUpperCase()})</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${styles.menuCopyButton} ${
                          active ? styles.menuCopyButtonActive : null
                        }`}
                      >
                        <TbCopy />
                        <span>RGB - ({String(primary.rgb)})</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${styles.menuCopyButton} ${
                          active ? styles.menuCopyButtonActive : null
                        }`}
                      >
                        <TbCopy />
                        <span>HSL - ({String(primary.hsl)})</span>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className={styles.buttonWrap}>
            <Menu>
              <Menu.Button className={styles.menuButton}>
                <span
                  className="colorIcon"
                  style={
                    {
                      '--color': `#${secondary.hex}`,
                    } as ColorIconType
                  }
                />
                <span
                  className={styles.mbLabel}
                >{`#${secondary.hex.toUpperCase()}`}</span>
                <IoIosArrowDown />
              </Menu.Button>
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
                      >
                        <TbCopy />
                        <span>HEX - ({secondary.hex.toLocaleUpperCase()})</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${styles.menuCopyButton} ${
                          active ? styles.menuCopyButtonActive : null
                        }`}
                      >
                        <TbCopy />
                        <span>RGB - ({String(secondary.rgb)})</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${styles.menuCopyButton} ${
                          active ? styles.menuCopyButtonActive : null
                        }`}
                      >
                        <TbCopy />
                        <span>HSL - ({String(secondary.hsl)})</span>
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
