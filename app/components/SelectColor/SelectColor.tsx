import React, { SetStateAction, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi2';

import { MyCustomCSS, ColorType } from '@/app/types/ColorType';

import styles from './SelectColor.module.css';

type MultiProps = {
  multiple: true;
  value: ColorType[];
  onChange: React.Dispatch<SetStateAction<ColorType[]>>;
};

type SingleProps = {
  multiple: false;
  value: ColorType;
  onChange: React.Dispatch<SetStateAction<ColorType>>;
};

type Props = {
  label: string;
  name: string;
  list: ColorType[];
} & (SingleProps | MultiProps);

const SelectColor = (props: Props) => {
  const { label, name, list, value, onChange, multiple } = props;

  return (
    <div className={styles.selectWrap}>
      <span className={styles.selectLabel}>{label} : </span>
      {multiple ? (
        <Listbox
          value={value}
          onChange={onChange}
          name="secondary-color"
          multiple
        >
          <Listbox.Button className={styles.selectButton}>
            {value.length >= 1 ? (
              <>
                <span>{`${value.length} selected `}</span>
                <span className={styles.selectChips}>
                  {value.map((item) => {
                    return (
                      <span
                        key={item.name}
                        className={styles.selectChip}
                        style={
                          {
                            '--color': item.displayColor.circle,
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
                  {list.map((item) => {
                    return (
                      <span
                        key={item.name}
                        className={styles.selectChip}
                        style={
                          {
                            '--color': item.displayColor.circle,
                          } as MyCustomCSS
                        }
                      />
                    );
                  })}
                </span>
              </>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter={styles.enterTransition}
            enterFrom={styles.fadeSlideOut}
            enterTo={styles.fadeSlideIn}
            leave={styles.leaveTransition}
            leaveFrom={styles.fadeSlideIn}
            leaveTo={styles.fadeSlideOut}
          >
            <Listbox.Options className={styles.selectOptionBox}>
              {list.map((color) => (
                <Listbox.Option key={color.name} value={color}>
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
          </Transition>
        </Listbox>
      ) : (
        <Listbox value={value} onChange={onChange} name={name}>
          <Listbox.Button className={styles.selectButton}>
            <span
              className={styles.colorIcon}
              style={
                {
                  '--color': value.displayColor.circle,
                } as MyCustomCSS
              }
            />
            <span>{value.name}</span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter={styles.enterTransition}
            enterFrom={styles.fadeSlideOut}
            enterTo={styles.fadeSlideIn}
            leave={styles.leaveTransition}
            leaveFrom={styles.fadeSlideIn}
            leaveTo={styles.fadeSlideOut}
          >
            <Listbox.Options className={styles.selectOptionBox}>
              {list.map((item) => (
                <Listbox.Option key={item.name} value={item}>
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
                            '--color': item.displayColor.gradientEnd,
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
                              '--color': item.displayColor.circle,
                            } as MyCustomCSS
                          }
                        />
                        <span>{item.name}</span>
                      </span>
                    );
                  }}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      )}
    </div>
  );
};

export default SelectColor;
