'use client';

import { useState } from 'react';
import { TbRefresh, TbFilterCog } from 'react-icons/tb';

import { useAppDispatch } from '@app/redux/hooks';
import { receiveColors } from '@app/redux/features/combinationSlice';

import SelectColor from '@/app/components/SelectColor/SelectColor';
import Button from '@/app/components/Button/Button';

import { colors, secondaryColors } from '@app/data/color';

import { generateCombination } from '@app/utils/generateCombination';

import { ColorType } from '@app/types/ColorType';

import styles from './FormFilter.module.css';

const FormFilter = () => {
  const dispatch = useAppDispatch();

  const [selectedPrimary, setSelectedPrimary] = useState<ColorType>(colors[0]);
  const [selectedSecondary, setSelectedSecondary] = useState<ColorType[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstFilter =
      selectedPrimary.name === 'All'
        ? []
        : [selectedPrimary.name.toLowerCase().replace(' ', '')];
    const secondFilter = selectedSecondary.map((selected) =>
      selected.name.toLowerCase().replace(' ', '')
    );

    dispatch(receiveColors(generateCombination(firstFilter, secondFilter)));
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
          <Button icon={<TbRefresh />}>Generate</Button>
        </div>
      </form>
    </div>
  );
};

export default FormFilter;
