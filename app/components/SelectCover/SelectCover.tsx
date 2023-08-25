import { Listbox } from '@headlessui/react';

import styles from './SelectCover.module.css';

interface Props {
  value: number;
  onChange: (number: number) => void;
  list: String[];
  name?: string;
}

function SelectCover({ value, onChange, list, name }: Props) {
  return (
    <div className={styles.selectWrap}>
      <Listbox value={value} onChange={onChange} name={name}>
        <Listbox.Button className={styles.selectButton}>
          {list[value]}
        </Listbox.Button>
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
      </Listbox>
    </div>
  );
}

export default SelectCover;
