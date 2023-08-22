'use client';

import { RefObject, useEffect, useRef, useState } from 'react';
import { TbRefresh, TbFilterCog } from 'react-icons/tb';

import { useAppDispatch, useAppSelector } from '@app/redux/hooks';
import {
  refreshColors,
  receiveColors,
} from '@app/redux/features/combinationSlice';

import SelectColor from '@/app/components/SelectColor/SelectColor';
import Button from '@/app/components/Button/Button';

import { colors, secondaryColors } from '@app/data/color';

import { generateCombination } from '@app/utils/generateCombination';

import { ColorType } from '@app/types/ColorType';

import styles from './FormFilter.module.css';

type Props = {
  elementRef: RefObject<HTMLDivElement>;
};

const FormFilter = ({ elementRef }: Props) => {
  const { loading } = useAppSelector((state) => state.combination);
  const dispatch = useAppDispatch();

  const [selectedPrimary, setSelectedPrimary] = useState<ColorType>(colors[0]);
  const [selectedSecondary, setSelectedSecondary] = useState<ColorType[]>([]);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(refreshColors());

    timerRef.current = setTimeout(() => {
      const firstFilter =
        selectedPrimary.name === 'All'
          ? []
          : [selectedPrimary.name.toLowerCase().replace(' ', '')];
      const secondFilter = selectedSecondary.map((selected) =>
        selected.name.toLowerCase().replace(' ', '')
      );

      dispatch(receiveColors(generateCombination(firstFilter, secondFilter)));
      elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

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
            label="Main"
            name="primary-color"
            list={colors}
            value={selectedPrimary}
            onChange={setSelectedPrimary}
            multiple={false}
          />

          <SelectColor
            label="Support"
            name="secondary-color"
            list={secondaryColors}
            value={selectedSecondary}
            onChange={setSelectedSecondary}
            multiple={true}
            mainColor={selectedPrimary.name}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button icon={<TbRefresh />} disabled={loading}>
            Regenerate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormFilter;
