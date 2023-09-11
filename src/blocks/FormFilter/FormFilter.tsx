'use client';

import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { TbRefresh, TbFilterCog, TbCheck } from 'react-icons/tb';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import {
  refreshColors,
  receiveColors,
} from '@/src/redux/features/combinationSlice';

import SelectColor from '@/src/components/SelectColor/SelectColor';
import ColorPicker from '@/src/components/ColorPicker/ColorPicker';

import Button from '@/src/elements/Button/Button';

import { colors, excludeColors, secondaryColors } from '@/src/data/color';

import { getColorFamily } from '@/src/utils/getColorFamily';
import { generateCombination } from '@/src/utils/generateCombination';

import { ColorType } from '@/src/types/ColorType';

import styles from './FormFilter.module.css';

type Props = {
  elementRef: RefObject<HTMLDivElement>;
};

const FormFilter = ({ elementRef }: Props) => {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.combination);
  const { value: conserved } = useAppSelector((state) => state.conserved);

  const [isCode, setIsCode] = useState(false);

  const [codeColor, setCodeColor] = useState('#808080');
  const [selectedPrimary, setSelectedPrimary] = useState<ColorType>(colors[0]);
  const [selectedSecondary, setSelectedSecondary] = useState<ColorType[]>([]);

  const codeColorFamily = useMemo(() => getColorFamily(codeColor), [codeColor]);

  const excludeList = secondaryColors.filter((color) => {
    const isExcludeColor = isCode
      ? excludeColors.includes(codeColorFamily)
      : excludeColors.includes(selectedPrimary.name);

    if (isExcludeColor) {
      return isCode
        ? color.name !== codeColorFamily
        : color.name !== selectedPrimary.name;
    }

    return true;
  });

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const switchColorType = () => {
    setIsCode((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(refreshColors(conserved));

    timerRef.current = setTimeout(() => {
      const firstFilter =
        selectedPrimary.name === 'All'
          ? []
          : [selectedPrimary.name.toLowerCase().replace(' ', '')];
      const secondFilter = selectedSecondary.map((selected) =>
        selected.name.toLowerCase().replace(' ', '')
      );

      dispatch(
        receiveColors(
          generateCombination(
            isCode ? codeColor : firstFilter,
            secondFilter,
            conserved
          )
        )
      );
      elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (excludeColors.includes(selectedPrimary.name)) {
      setSelectedSecondary((prev) => {
        return prev.filter((color) => color.name !== selectedPrimary.name);
      });
    }

    if (excludeColors.includes(codeColorFamily)) {
      setSelectedSecondary((prev) => {
        return prev.filter((color) => color.name !== codeColorFamily);
      });
    }
  }, [selectedPrimary, codeColorFamily, isCode]);

  return (
    <div className={styles.customize}>
      <h2 className={styles.headingCustomize}>
        <TbFilterCog />
        <span>Filter Color</span>
      </h2>
      <p className={styles.paragraph}>
        Select the range of colors you want to generate!
      </p>

      <div className={styles.selectTypeForm}>
        <input
          type="checkbox"
          checked={isCode}
          onChange={() => switchColorType()}
          id="select-type-color"
          className={styles.inputCheck}
        />
        <label className={styles.specificLabel} htmlFor="select-type-color">
          <span>Use specific main colors : </span>
          <span className={styles.checkBox}>{isCode && <TbCheck />}</span>
        </label>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.groupSelect}>
          {isCode ? (
            <ColorPicker
              label="Main"
              codeColor={codeColor}
              setCodeColor={setCodeColor}
            />
          ) : (
            <SelectColor
              label="Main"
              name="primary-color"
              list={colors}
              value={selectedPrimary}
              onChange={setSelectedPrimary}
              multiple={false}
            />
          )}

          <SelectColor
            label="Accent"
            name="secondary-color"
            list={excludeList}
            value={selectedSecondary}
            onChange={setSelectedSecondary}
            multiple={true}
            mainColor={isCode ? codeColorFamily : selectedPrimary.name}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            icon={
              <TbRefresh className={loading ? styles.rotateAnimation : null} />
            }
            disabled={loading}
          >
            Regenerate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormFilter;
