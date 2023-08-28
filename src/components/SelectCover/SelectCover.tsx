import { Listbox } from '@headlessui/react';
import { HiChevronUpDown } from 'react-icons/hi2';

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
          <span className={styles.selectLabel}>
            Preview: <b className={styles.titleBold}>{list[value]}</b>
          </span>
          <HiChevronUpDown className={styles.iconBtn} />
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
