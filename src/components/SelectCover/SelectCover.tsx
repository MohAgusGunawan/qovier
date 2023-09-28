import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiChevronUpDown } from 'react-icons/hi2';
import { CgDisplayGrid } from 'react-icons/cg';

import styles from './SelectCover.module.css';

interface Props {
  value: number;
  onChange: (number: number) => void;
  list: String[];
  name?: string;
  disabled?: boolean;
}

function SelectCover({ value, onChange, list, name, disabled }: Props) {
  return (
    <div className={styles.selectWrap}>
      <Listbox
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
      >
        <Listbox.Button
          className={styles.selectButton}
          title="Select a Visualization"
        >
          <CgDisplayGrid />
          <span className={styles.selectLabel}>
            Preview: <b className={styles.titleBold}>{list[value]}</b>
          </span>
          <HiChevronUpDown className={styles.iconBtn} />
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
            {list.map((cover, index) => (
              <Listbox.Option key={index} value={index}>
                {({ active }) => (
                  <span
                    className={`${styles.selectOption} ${
                      active ? styles.selectOptionFocus : null
                    }`}
                  >
                    {cover}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

export default SelectCover;
