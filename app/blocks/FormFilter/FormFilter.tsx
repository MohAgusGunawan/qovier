'use client';

import { Fragment, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi2';
import { TbRefresh, TbFilterCog } from 'react-icons/tb';

import { colors, secondaryColors } from '@app/data/color';

import { MyCustomCSS, ColorType } from '@app/types/ColorType';

import styles from './FormFilter.module.css';

const FormFilter = () => {
  const [selectedPrimary, setSelectedPrimary] = useState<ColorType>(colors[0]);
  const [selectedSecondary, setSelectedSecondary] = useState<ColorType[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(selectedPrimary, selectedSecondary);
  };

  return (
    <div className={styles.customize}>
      <h2 className={styles.headingCustomize}>
        <TbFilterCog />
        <span>Filter Color</span>
      </h2>
      <p className={styles.paragraph}>
        Select the range of colors you want to generate!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.groupSelect}>
          <div className={styles.selectWrap}>
            <span className={styles.selectLabel}>Primary : </span>
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
                  <Listbox.Option key={color.name} value={color} as={Fragment}>
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
            <span className={styles.selectLabel}>Secondary :</span>
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
                  <Listbox.Option key={color.name} value={color} as={Fragment}>
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
  );
};

export default FormFilter;
