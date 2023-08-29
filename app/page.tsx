'use client';

import { useEffect, useRef } from 'react';
import { HiChevronDoubleUp } from 'react-icons/hi2';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { receiveColors } from '@/src/redux/features/combinationSlice';
import { setCover } from '@/src/redux/features/coverSlice';

import Header from '@/src/blocks/Header/Header';
import FormFilter from '@/src//blocks/FormFilter/FormFilter';
import Footer from '@/src/blocks/Footer/Footer';

import Card from '@/src/components/Card/Card';
import SelectCover from '@/src/components/SelectCover/SelectCover';

import { generateCombination } from '@/src/utils/generateCombination';

import { coverPreview } from '@/src/data/coverPreview';

import styles from './page.module.css';

export default function Home() {
  const scollToRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { value: combination } = useAppSelector((state) => state.combination);
  const { value: cover } = useAppSelector((state) => state.cover);

  const handleCoverChange = (number: number) => {
    dispatch(setCover(number));
  };

  useEffect(() => {
    dispatch(receiveColors(generateCombination()));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section aria-label="Result color pair" id="result" ref={scollToRef}>
          <div className={styles.selectBox}>
            <div className="wrapper">
              <SelectCover
                value={cover}
                onChange={handleCoverChange}
                list={coverPreview}
                name="Change Preview"
              />
            </div>
          </div>
          <div className="wrapper">
            <div className={styles.cardContainer}>
              {combination.map((data, index) => (
                <Card data={data} key={index} index={index} />
              ))}
            </div>
          </div>
        </section>

        <div className="wrapper">
          <div className={styles.divider}>
            <HiChevronDoubleUp className={styles.arrowUp} />
          </div>

          <FormFilter elementRef={scollToRef} />
        </div>
      </main>

      <Footer />
    </>
  );
}
