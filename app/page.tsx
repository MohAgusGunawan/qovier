'use client';

import { useEffect, useRef, useState } from 'react';
import { HiChevronDoubleUp } from 'react-icons/hi2';
import { BsFolderFill } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { receiveColors } from '@/src/redux/features/combinationSlice';
import { setCover } from '@/src/redux/features/coverSlice';
import { receiveItems } from '@/src/redux/features/collectionSlice';

import Header from '@/src/blocks/Header/Header';
import FormFilter from '@/src//blocks/FormFilter/FormFilter';
import Footer from '@/src/blocks/Footer/Footer';
import ColorList from '@/src/blocks/ColorList/ColorList';
import CollectionDrawer from '@/src/blocks/CollectionDrawer/CollectionDrawer';
import CollectionSheet from '@/src/blocks/CollectionSheet/CollectionSheet';

import Card from '@/src/components/Card/Card';
import SelectCover from '@/src/components/SelectCover/SelectCover';

import { generateCombination } from '@/src/utils/generateCombination';

import { coverPreview } from '@/src/data/coverPreview';

import styles from './page.module.css';

export default function Home() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenSheet, setIsOpenSheet] = useState(false);

  const scollToRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { value: combination } = useAppSelector((state) => state.combination);
  const { value: cover } = useAppSelector((state) => state.cover);
  const { value: collection, loading: gettingCollection } = useAppSelector(
    (state) => state.collection
  );

  const handleCoverChange = (number: number) => {
    dispatch(setCover(number));
  };

  useEffect(() => {
    dispatch(receiveColors(generateCombination()));
  }, [dispatch]);

  useEffect(() => {
    const collectionStorage = localStorage.getItem('qovier-collection');
    const localData =
      collectionStorage !== null ? JSON.parse(collectionStorage) : [];

    dispatch(receiveItems(localData));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section aria-label="Result color pair" id="result" ref={scollToRef}>
          <div className={styles.selectBox}>
            <div className={`wrapper ${styles.topBar}`}>
              <SelectCover
                value={cover}
                onChange={handleCoverChange}
                list={coverPreview}
                name="Change Preview"
              />
              <div className={styles.toggleWrapper}>
                <button
                  onClick={() => setIsOpenDrawer(true)}
                  className={styles.toggleDrawer}
                  disabled={gettingCollection}
                >
                  {gettingCollection ? (
                    <>
                      <TbLoader2 />
                      <span>Loading ...</span>
                    </>
                  ) : (
                    <>
                      <BsFolderFill />
                      <span>My Collection ({collection.length})</span>
                    </>
                  )}
                </button>
              </div>
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

        <div className={styles.bottomBar}>
          <button
            className={styles.mobileCollectionButton}
            onClick={() => setIsOpenSheet(true)}
            disabled={gettingCollection}
          >
            {gettingCollection ? (
              <>
                <TbLoader2 />
                <span>Loading ...</span>
              </>
            ) : (
              <>
                <BsFolderFill />{' '}
                <span>My Collection ({collection.length})</span>
              </>
            )}
          </button>
        </div>

        <div className="wrapper">
          <div className={styles.divider}>
            <HiChevronDoubleUp className={styles.arrowUp} />
          </div>

          <FormFilter elementRef={scollToRef} />
        </div>

        <ColorList />
      </main>

      <CollectionDrawer
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />

      <CollectionSheet
        isOpenSheet={isOpenSheet}
        setIsOpenSheet={setIsOpenSheet}
      />

      <Footer />
    </>
  );
}
