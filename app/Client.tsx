'use client';

import { useEffect, useRef, useState } from 'react';
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';
import { HiChevronDoubleUp } from 'react-icons/hi2';
import { HiFilter } from 'react-icons/hi';
import { BsFolderFill } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';
import fontColorContrast from 'font-color-contrast';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { receiveColors } from '@/src/redux/features/combinationSlice';
import { setCover } from '@/src/redux/features/coverSlice';
import { receiveItems } from '@/src/redux/features/collectionSlice';
import { receiveConserved } from '@/src/redux/features/conservedSlice';

import Header from '@/src/blocks/Header/Header';
import FormFilter from '@/src//blocks/FormFilter/FormFilter';
import Footer from '@/src/blocks/Footer/Footer';
import ColorListModal from '@/src/blocks/ColorListModal/ColorListModal';
import CollectionDrawer from '@/src/blocks/CollectionDrawer/CollectionDrawer';
import CollectionSheet from '@/src/blocks/CollectionSheet/CollectionSheet';

import CookieConsent from '@/src/components/CookieConsent/CookieConsent';
import Card from '@/src/components/Card/Card';
import SelectCover from '@/src/components/SelectCover/SelectCover';
import Padlock from '@/src/components/Padlock/Padlock';

import { generateCombination } from '@/src/utils/generateCombination';

import styles from './Client.module.css';

interface Props {
  colorThumbnail: {
    name: string;
    hexcode: string;
  }[];
  coverPreview: string[];
  lolSecretKey: string;
}

const Client = ({ colorThumbnail, coverPreview, lolSecretKey }: Props) => {
  const [firstRender, setFirstRender] = useState(true);

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [rangeModal, setRangeModal] = useState('Neutral');

  const scollToRef = useRef<HTMLDivElement>(null);
  const formFilterRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { value: combination, loading: gettingCombination } = useAppSelector(
    (state) => state.combination
  );
  const { value: cover } = useAppSelector((state) => state.cover);
  const { value: collection, loading: gettingCollection } = useAppSelector(
    (state) => state.collection
  );
  const { value: conserved } = useAppSelector((state) => state.conserved);

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

  const scrollToFormFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    formFilterRef.current?.focus();
  };

  useEffect(() => {
    const conservedStorage = localStorage.getItem('qovier-conserved');

    const localData = conservedStorage !== null ? conservedStorage : '';

    if (localData !== '') {
      try {
        const bytes = AES.decrypt(localData, lolSecretKey);
        const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

        dispatch(receiveConserved(decryptedData));
      } catch {
        dispatch(receiveConserved([]));
      }
    } else {
      dispatch(receiveConserved([]));
    }
  }, [dispatch, lolSecretKey]);

  useEffect(() => {
    const collectionStorage = localStorage.getItem('qovier-collection');

    const localData = collectionStorage !== null ? collectionStorage : '';

    if (localData !== '') {
      try {
        const bytes = AES.decrypt(localData, lolSecretKey);
        const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

        dispatch(receiveItems(decryptedData));
      } catch {
        dispatch(receiveItems([]));
      }
    } else {
      dispatch(receiveItems([]));
    }
  }, [dispatch, lolSecretKey]);

  useEffect(() => {
    if (firstRender) {
      dispatch(receiveColors(generateCombination([], [], conserved)));
      setFirstRender(false);
    }
  }, [conserved, dispatch, firstRender]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section aria-label="Result color pair" id="result" ref={scollToRef}>
          <div className={styles.bar}>
            <div className={`wrapper ${styles.topBar}`}>
              <SelectCover
                value={cover}
                onChange={handleCoverChange}
                list={coverPreview}
                name="Change Preview"
                disabled={gettingCombination}
              />
              <div className={styles.menuWrapper}>
                {gettingCollection ? (
                  <button
                    className={styles.menuButton}
                    disabled={gettingCollection}
                  >
                    <TbLoader2 className="rotateAnimation" />
                    <span>Loading ...</span>
                  </button>
                ) : (
                  <>
                    <Padlock num={conserved.length} />

                    <button
                      className={styles.menuButton}
                      disabled={gettingCombination}
                      onClick={(e) => scrollToFormFilter(e)}
                      title="Filter by Color Range"
                    >
                      <HiFilter />
                      <span>Filter</span>
                    </button>

                    <button
                      onClick={() => setIsOpenDrawer(true)}
                      className={styles.menuButton}
                      disabled={gettingCollection}
                      title="My Color Pair Collection"
                    >
                      <BsFolderFill />
                      <span>Collection ({collection.length})</span>
                    </button>
                  </>
                )}
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

        <div className={styles.divider}>
          <HiChevronDoubleUp className={`bounceAnimation ${styles.arrowUp}`} />
        </div>

        <div className={styles.bottomBar}>
          {gettingCollection ? (
            <button className={styles.mobileCollectionButton} disabled={true}>
              <TbLoader2 className="rotateAnimation" />
              <span>Loading ...</span>
            </button>
          ) : (
            <>
              <Padlock num={conserved.length} />

              <button
                className={styles.mobileCollectionButton}
                onClick={() => setIsOpenSheet(true)}
                disabled={gettingCollection}
                title="My Color Pair Collection"
              >
                {gettingCollection ? (
                  <>
                    <TbLoader2 className="rotateAnimation" />
                    <span>Loading ...</span>
                  </>
                ) : (
                  <>
                    <BsFolderFill />{' '}
                    <span>Collection ({collection.length})</span>
                  </>
                )}
              </button>

              <button
                className={styles.mobileMenuButton}
                disabled={gettingCombination}
                onClick={(e) => scrollToFormFilter(e)}
                aria-label="Filter"
                title="Filter by Color Range"
              >
                <HiFilter />
              </button>
            </>
          )}
        </div>

        <span className={styles.mobileLineDivider}></span>

        <div className="wrapper">
          <FormFilter elementRef={scollToRef} formFilterRef={formFilterRef} />
        </div>

        <div className={styles.colorList}>
          <div className="wrapper">
            <h2 className={styles.colorListHeading}>List of Colors</h2>
            <p className={styles.colorListParagraph}>
              Among the millions of available colors, here are some colors that
              we may already recognize based on their hue range. These colors
              can be used as the most likely color references to appear in the
              color results above.{' '}
              <span className={styles.emphasis}>
                Click the card to see the full list of colors!
              </span>
            </p>

            <div className={styles.colorContainer}>
              {colorThumbnail.map((color, index) => {
                return (
                  <div className={styles.colorGroup} key={index}>
                    <button
                      className={styles.colorGroupButton}
                      style={{
                        background: color.hexcode,
                        color: fontColorContrast(color.hexcode),
                      }}
                      title={`${color.name} range`}
                      onClick={() => openModal(color.name)}
                    >
                      <span className={styles.colorGroupButtonLabel}>
                        {color.name}
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

      <CookieConsent />

      <Footer />
    </>
  );
};

export default Client;
