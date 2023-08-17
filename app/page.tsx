'use client';

import { Fragment, useState, CSSProperties } from 'react';
import { Listbox } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi2';
import { TbSettingsBolt, TbRefresh } from 'react-icons/tb';

import styles from './page.module.css';

const colors = [
  {
    name: 'All',
    displayColor: {
      circle:
        'linear-gradient(49deg, rgba(255,170,0,1) 0%, rgba(85,255,0,1) 22%, rgba(0,255,170,1) 50%, rgba(0,85,255,1) 78%, rgba(170,0,255,1) 100%)',
      gradientEnd: '#dadada',
    },
  },
  {
    name: 'Red',
    displayColor: {
      circle: '#ff0000',
      gradientEnd: '#ff0000',
    },
  },
  {
    name: 'Orange',
    displayColor: {
      circle: '#ff8000',
      gradientEnd: '#ff8000',
    },
  },
  {
    name: 'Yellow',
    displayColor: {
      circle: '#ffff00',
      gradientEnd: '#ffff00',
    },
  },
  {
    name: 'Chartreuse',
    displayColor: {
      circle: '#80ff00',
      gradientEnd: '#80ff00',
    },
  },
  {
    name: 'Green',
    displayColor: {
      circle: '#00ff00',
      gradientEnd: '#00ff00',
    },
  },
  {
    name: 'Spring Green',
    displayColor: {
      circle: '#00ff80',
      gradientEnd: '#00ff80',
    },
  },
  {
    name: 'Cyan',
    displayColor: {
      circle: '#00ffff',
      gradientEnd: '#00ffff',
    },
  },
  {
    name: 'Azure',
    displayColor: {
      circle: '#0080ff',
      gradientEnd: '#0080ff',
    },
  },
  {
    name: 'Blue',
    displayColor: {
      circle: '#0000ff',
      gradientEnd: '#0000ff',
    },
  },
  {
    name: 'Violet',
    displayColor: {
      circle: '#8000ff',
      gradientEnd: '#8000ff',
    },
  },
  {
    name: 'Magenta',
    displayColor: {
      circle: '#ff00ff',
      gradientEnd: '#ff00ff',
    },
  },
  {
    name: 'Rose',
    displayColor: {
      circle: '#ff0080',
      gradientEnd: '#ff0080',
    },
  },
  {
    name: 'Black',
    displayColor: {
      circle: '#000000',
      gradientEnd: '#000000',
    },
  },
  {
    name: 'Gray',
    displayColor: {
      circle: '#808080',
      gradientEnd: '#808080',
    },
  },
  {
    name: 'White',
    displayColor: {
      circle: '#FFFFFF',
      gradientEnd: '#dadada',
    },
  },
];

const secondaryColors = colors.filter((color) => color.name !== 'All');

export interface MyCustomCSS extends CSSProperties {
  '--color': string;
}

type colorType = {
  name: string;
  displayColor: {
    circle: string;
    gradientEnd: string;
  };
};

export default function Home() {
  const [selectedPrimary, setSelectedPrimary] = useState<colorType>(colors[0]);
  const [selectedSecondary, setSelectedSecondary] = useState<colorType[]>([]);

  return (
    <main className={styles.main}>
      <div className="wrapper">
        <header>
          <div className={styles.logoWrapper}>
            <svg
              className={styles.logo}
              viewBox="0 0 33 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3.52152C0 1.57664 1.57664 0 3.52152 0C4.52567 0 5.48205 0.42867 6.15023 1.17824L16.4716 12.7568C16.7341 13.0512 16.9607 13.3757 17.147 13.7234L20.5378 20.0549C22.3216 23.3857 19.9084 27.4154 16.13 27.4154H5C2.23857 27.4154 0 25.1768 0 22.4154V3.52152Z"
                fill="#2F2F2F"
              />
              <path
                d="M33 22.9879C33 24.4673 31.8007 25.6667 30.3212 25.6667C29.3363 25.6667 28.4308 25.1262 27.9633 24.2593L22.2039 13.5782C22.0682 13.3265 21.9112 13.087 21.7345 12.8621L17.9667 8.06666C15.8807 5.84161 17.4584 2.19999 20.5083 2.19999L28 2.19999C30.7614 2.19999 33 4.43857 33 7.19999L33 22.9879Z"
                fill="#515151"
              />
            </svg>
          </div>

          <h1 className={styles.headline}>Qovier</h1>
          <p className={styles.paragraph}>
            Generator of beautiful two color combinations, explore color pairs
            for your designs.
          </p>
        </header>

        <div className={styles.customize}>
          <h2 className={styles.headingCustomize}>
            <TbSettingsBolt />
            <span>Customize</span>
          </h2>
          <p className={styles.paragraph}>
            Select the range of colors you want to generate!
          </p>

          <form className={styles.form}>
            <div className={styles.groupSelect}>
              <div className={styles.selectWrap}>
                <span className={styles.selectLabel}>Primary Color : </span>
                <Listbox
                  value={selectedPrimary}
                  onChange={setSelectedPrimary}
                  name="primary-color"
                >
                  <Listbox.Button className={styles.selectButton}>
                    <span
                      className={styles.colorIcon}
                      style={
                        {
                          '--color': selectedPrimary.displayColor.circle,
                        } as MyCustomCSS
                      }
                    />
                    <span>{selectedPrimary.name}</span>
                  </Listbox.Button>
                  <Listbox.Options className={styles.selectOptionBox}>
                    {colors.map((color) => (
                      <Listbox.Option
                        key={color.name}
                        value={color}
                        as={Fragment}
                      >
                        {({ active, selected }) => {
                          return (
                            <span
                              className={`${
                                active
                                  ? styles.selectOptionFocus
                                  : styles.selectOption
                              }`}
                              style={
                                {
                                  '--color': color.displayColor.gradientEnd,
                                } as MyCustomCSS
                              }
                            >
                              <span className={styles.selectSelected}>
                                {selected && <HiCheck />}
                              </span>
                              <span
                                className={styles.colorIcon}
                                style={
                                  {
                                    '--color': color.displayColor.circle,
                                  } as MyCustomCSS
                                }
                              />
                              <span>{color.name}</span>
                            </span>
                          );
                        }}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>

              <div className={styles.selectWrap}>
                <span className={styles.selectLabel}>Secondary Color :</span>
                <Listbox
                  value={selectedSecondary}
                  onChange={setSelectedSecondary}
                  name="secondary-color"
                  multiple
                >
                  <Listbox.Button className={styles.selectButton}>
                    {selectedSecondary.length >= 1 ? (
                      <>
                        <span>{`${selectedSecondary.length} selected `}</span>
                        <span className={styles.selectChips}>
                          {selectedSecondary.map((color) => {
                            return (
                              <span
                                key={color.name}
                                className={styles.selectChip}
                                style={
                                  {
                                    '--color': color.displayColor.circle,
                                  } as MyCustomCSS
                                }
                              />
                            );
                          })}
                        </span>
                      </>
                    ) : (
                      <>
                        <span>All</span>
                        <span className={styles.selectChips}>
                          {secondaryColors.map((color) => {
                            return (
                              <span
                                key={color.name}
                                className={styles.selectChip}
                                style={
                                  {
                                    '--color': color.displayColor.circle,
                                  } as MyCustomCSS
                                }
                              />
                            );
                          })}
                        </span>
                      </>
                    )}
                  </Listbox.Button>
                  <Listbox.Options className={styles.selectOptionBox}>
                    {secondaryColors.map((color) => (
                      <Listbox.Option
                        key={color.name}
                        value={color}
                        as={Fragment}
                      >
                        {({ active, selected }) => {
                          return (
                            <span
                              className={`${
                                active
                                  ? styles.selectOptionFocus
                                  : styles.selectOption
                              }`}
                              style={
                                {
                                  '--color': color.displayColor.gradientEnd,
                                } as MyCustomCSS
                              }
                            >
                              <span className={styles.selectSelected}>
                                {selected && <HiCheck />}
                              </span>
                              <span
                                className={styles.colorIcon}
                                style={
                                  {
                                    '--color': color.displayColor.circle,
                                  } as MyCustomCSS
                                }
                              />
                              <span>{color.name}</span>
                            </span>
                          );
                        }}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>

            <div className={styles.buttonWrapper}>
              <button className={styles.buttonPrimary}>
                <span>Generate</span>
                <TbRefresh />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
