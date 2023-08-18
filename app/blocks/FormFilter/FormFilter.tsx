'use client';

import { useState } from 'react';
import { TbRefresh, TbFilterCog } from 'react-icons/tb';

import SelectColor from '@/app/components/SelectColor/SelectColor';

import { colors, secondaryColors } from '@app/data/color';

import { ColorType } from '@app/types/ColorType';

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
          <SelectColor
            label="Primary"
            name="primary-color"
            list={colors}
            value={selectedPrimary}
            onChange={setSelectedPrimary}
            multiple={false}
          />

          <SelectColor
            label="Secondary"
            name="secondary-color"
            list={secondaryColors}
            value={selectedSecondary}
            onChange={setSelectedSecondary}
            multiple={true}
          />
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
