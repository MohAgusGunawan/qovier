'use client';

import { useEffect, useRef, useState } from 'react';
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';
import { HiChevronDoubleUp } from 'react-icons/hi2';
import { BsFolderFill } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';
import fontColorContrast from 'font-color-contrast';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { receiveColors } from '@/src/redux/features/combinationSlice';
import { setCover } from '@/src/redux/features/coverSlice';
import { receiveItems } from '@/src/redux/features/collectionSlice';

import { lolSecretMessage } from '@/src/data/color';

import Header from '@/src/blocks/Header/Header';
import FormFilter from '@/src//blocks/FormFilter/FormFilter';
import Footer from '@/src/blocks/Footer/Footer';
import ColorListModal from '@/src/blocks/ColorListModal/ColorListModal';
import CollectionDrawer from '@/src/blocks/CollectionDrawer/CollectionDrawer';
import CollectionSheet from '@/src/blocks/CollectionSheet/CollectionSheet';

import Card from '@/src/components/Card/Card';
import SelectCover from '@/src/components/SelectCover/SelectCover';

import { generateCombination } from '@/src/utils/generateCombination';

import { colorList } from '@/src/data/colorList';
import { coverPreview } from '@/src/data/coverPreview';

import styles from './page.module.css';

export default function Home() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [rangeModal, setRangeModal] = useState('Neutral');

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

  const openModal = (range: string) => {
    setRangeModal(range);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setRangeModal('Neutral');
  };

  useEffect(() => {
    dispatch(receiveColors(generateCombination()));
  }, [dispatch]);

  useEffect(() => {
    const collectionStorage = localStorage.getItem('qovier-collection');

    const localData = collectionStorage !== null ? collectionStorage : '';

    if (localData !== '') {
      try {
        const bytes = AES.decrypt(localData, lolSecretMessage);
        const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

        dispatch(receiveItems(decryptedData));
      } catch {
        dispatch(receiveItems([]));
      }
    } else {
      dispatch(receiveItems([]));
    }
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

        <div className={styles.colorList}>
          <div className="wrapper">
            <h2 className={styles.colorListHeading}>Color List</h2>
            <p className={styles.colorListParagraph}>
              Among the millions of colors available, here are some colors that
              we may already recognize based on their hue range. These colors
              can be used as color references the most likely filter to appear
              in the color results above. Click the card to see all color list!
            </p>

            <div className={styles.colorContainer}>
              {colorList.map((color, index) => {
                return (
                  <div className={styles.colorGroup} key={index}>
                    <button
                      className={styles.colorGroupButton}
                      style={{
                        background: color.hexCode,
                        color: fontColorContrast(color.hexCode),
                      }}
                      title={`${color.range} range`}
                      onClick={() => openModal(color.range)}
                    >
                      <span className={styles.colorGroupButtonLabel}>
                        {color.range}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <ColorListModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        range={rangeModal}
      />

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
