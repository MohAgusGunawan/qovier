'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';

import { MyCustomCSS } from '@app/types/ColorType';

import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardDisplay}>
        <div className={styles.cardPairColor} />
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
                      '--color': 'yellow',
                    } as MyCustomCSS
                  }
                />
                <span className={styles.mbLabel}>#762839</span>
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
                        <span>Copy HEX</span>
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
                        <span>Copy HSL</span>
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
                        <span>Copy RGB</span>
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
                      '--color': '#762839',
                    } as MyCustomCSS
                  }
                />
                <span className={styles.mbLabel}>#762839</span>
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
                        <span>Copy HEX</span>
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
                        <span>Copy HSL</span>
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
                        <span>Copy RGB</span>
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
