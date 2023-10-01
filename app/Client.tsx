'use client';

import { useEffect, useRef, useState } from 'react';
import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';
import { HiChevronDoubleUp } from 'react-icons/hi2';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { receiveColors } from '@/src/redux/features/combinationSlice';
import { setCover } from '@/src/redux/features/coverSlice';
import { receiveItems } from '@/src/redux/features/collectionSlice';
import { receiveConserved } from '@/src/redux/features/conservedSlice';

import Header from '@/src/blocks/Header/Header';
import Footer from '@/src/blocks/Footer/Footer';
import TopBar from '@/src/blocks/TopBar/TopBar';
import BottomBar from '@/src/blocks/BottomBar/BottomBar';
import ColorListModal from '@/src/blocks/ColorListModal/ColorListModal';
import CollectionDrawer from '@/src/blocks/CollectionDrawer/CollectionDrawer';
import CollectionSheet from '@/src/blocks/CollectionSheet/CollectionSheet';

import FormFilter from '@/src/sections/FormFilter/FormFilter';
import ColorList from '@/src/sections/ColorList/ColorList';

import CookieConsent from '@/src/components/CookieConsent/CookieConsent';
import Card from '@/src/components/Card/Card';

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

  const { value: combination } = useAppSelector((state) => state.combination);
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
      <CookieConsent />
      <Header />

      <main className={styles.main}>
        <section aria-label="Result color pair" id="result" ref={scollToRef}>
          <TopBar
            coverPreview={coverPreview}
            handleCoverChange={handleCoverChange}
            scrollToFormFilter={scrollToFormFilter}
            setIsOpenDrawer={setIsOpenDrawer}
          />
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

        <BottomBar
          scrollToFormFilter={scrollToFormFilter}
          setIsOpenSheet={setIsOpenSheet}
        />

        <span className={styles.mobileLineDivider}></span>

        <div className="wrapper">
          <FormFilter elementRef={scollToRef} formFilterRef={formFilterRef} />
        </div>

        <ColorList colorThumbnail={colorThumbnail} openModal={openModal} />
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
};

export default Client;
