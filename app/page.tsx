'use client';

import { useEffect, useRef } from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi2';

import { useAppDispatch, useAppSelector } from '@app/redux/hooks';
import { receiveColors } from '@app/redux/features/combinationSlice';

import Header from './blocks/Header/Header';
import FormFilter from './blocks/FormFilter/FormFilter';

import Card from '@app/components/Card/Card';

import { generateCombination } from './utils/generateCombination';

import styles from './page.module.css';

export default function Home() {
  const scollToRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { value: combination } = useAppSelector((state) => state.combination);

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
            <div className={styles.cardContainer}>
              {combination.map((data, index) => (
                <Card data={data} key={index} />
              ))}
            </div>
          </section>

          <div className={styles.divider}>
            <HiChevronDoubleDown className={styles.arrowDown} />
          </div>

          <FormFilter elementRef={scollToRef} />

          <section>
            <h2>About Qovier</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis beatae maxime sit labore, ratione doloribus tenetur
              illo dolorem veniam tempora voluptatum neque omnis. Facilis
              perferendis dolorum in magni autem dicta?
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
