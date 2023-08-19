'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiChevronDoubleDown } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';

import Header from './blocks/Header/Header';
import FormFilter from './blocks/FormFilter/FormFilter';

import { MyCustomCSS } from './types/ColorType';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="wrapper">
        <Header />
        <FormFilter />

        <section className={styles.result} aria-labelledby="heading-result">
          <div className={styles.divider}>
            <HiChevronDoubleDown className={styles.arrowDown} />
          </div>

          <h2 className={styles.title} id="heading-result">
            Result
          </h2>

          <div className={styles.cardContainer}>
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
                            <button className={styles.menuCopyButton}>
                              <TbCopy />
                              <span>Copy HEX</span>
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button className={styles.menuCopyButton}>
                              <TbCopy />
                              <span>Copy HSL</span>
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button className={styles.menuCopyButton}>
                              <TbCopy />
                              <span>Copy RGB</span>
                            </button>
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
                            <button className={styles.menuCopyButton}>
                              <TbCopy />
                              <span>Copy HEX</span>
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button className={styles.menuCopyButton}>
                              <TbCopy />
                              <span>Copy HSL</span>
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button className={styles.menuCopyButton}>
                              <TbCopy />
                              <span>Copy RGB</span>
                            </button>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
