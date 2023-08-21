import React, { SetStateAction, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi2';

import { ColorIconType, ColorType } from '@app/types/ColorType';

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
                          } as ColorIconType
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
                          } as ColorIconType
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
            enter="at-enterTransition"
            enterFrom="at-fadeSlideOut"
            enterTo="at-fadeSlideIn"
            leave="at-leaveTransition"
            leaveFrom="at-fadeSlideIn"
            leaveTo="at-fadeSlideOut"
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
                          } as ColorIconType
                        }
                      >
                        <span className={styles.selectSelected}>
                          {selected && <HiCheck />}
                        </span>
                        <span
                          className="colorIcon"
                          style={
                            {
                              '--color': item.displayColor.circle,
                            } as ColorIconType
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
      ) : (
        <Listbox value={value} onChange={onChange} name={name}>
          <Listbox.Button className={styles.selectButton}>
            <span
              className="colorIcon"
              style={
                {
                  '--color': value.displayColor.circle,
                } as ColorIconType
              }
            />
            <span>{value.name}</span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="at-enterTransition"
            enterFrom="at-fadeSlideOut"
            enterTo="at-fadeSlideIn"
            leave="at-leaveTransition"
            leaveFrom="at-fadeSlideIn"
            leaveTo="at-fadeSlideOut"
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
                          } as ColorIconType
                        }
                      >
                        <span className={styles.selectSelected}>
                          {selected && <HiCheck />}
                        </span>
                        <span
                          className="colorIcon"
                          style={
                            {
                              '--color': item.displayColor.circle,
                            } as ColorIconType
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
