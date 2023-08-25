'use client';

import { useEffect, useRef } from 'react';
import { HiChevronDoubleUp } from 'react-icons/hi2';

import { useAppDispatch, useAppSelector } from '@app/redux/hooks';
import { receiveColors } from '@app/redux/features/combinationSlice';
import { setCover } from '@app/redux/features/coverSlice';

import Header from '@app/blocks/Header/Header';
import FormFilter from '@app/blocks/FormFilter/FormFilter';
import Footer from '@app/blocks/Footer/Footer';

import Card from '@app/components/Card/Card';
import SelectCover from '@app/components/SelectCover/SelectCover';

import { generateCombination } from './utils/generateCombination';

import { coverPreview } from '@app/data/coverPreview';

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
      <main className={styles.main}>
        <div className="wrapper">
          <Header />

          <section
            className={styles.result}
            aria-label="Result color pair"
            id="result"
            ref={scollToRef}
          >
            <div className={styles.selectBox}>
              <SelectCover
                value={cover}
                onChange={handleCoverChange}
                list={coverPreview}
                name="Change Preview"
              />
            </div>
            <div className={styles.cardContainer}>
              {combination.map((data, index) => (
                <Card data={data} key={index} cover={cover} />
              ))}
            </div>
          </section>

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
