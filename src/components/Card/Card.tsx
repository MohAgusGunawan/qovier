'use client';

// Bar bar coding is real!

import React, { useMemo, useState } from 'react';
import { getContrast } from 'accessible-colors';
import { BsFolderPlus, BsFillFolderFill } from 'react-icons/bs';
import {
  HiLockClosed,
  HiOutlineLockOpen,
  HiMiniArrowsRightLeft,
} from 'react-icons/hi2';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { addItem, removeItem } from '@/src/redux/features/collectionSlice';
import { lock, unlock } from '@/src/redux/features/conservedSlice';

import { coverPreview } from '@/src/data/coverPreview';

import PreviewSolid from '@/src/elements/PreviewSolid/PreviewSolid';
import PreviewPattern from '@/src/elements/PreviewPattern/PreviewPattern';
import PreviewText from '@/src/elements/PreviewText/PreviewText';
import PreviewGradient from '@/src/elements/PreviewGradient/PreviewGradient';
import PreviewIllustration from '@/src/elements/PreviewIllustration/PreviewIllustration';

import ButtonCopy from '@/src/elements/ButtonCopy/ButtonCopy';
import SlideButton from '@/src/elements/SlideButton/SlideButton';
import IndicatorSlider from '@/src/elements/IndicatorSlider/IndicatorSlider';

import { ColorPair } from '@/src/types/ColorType';

import styles from './Card.module.css';

type Props = {
  data: ColorPair;
  index: number;
};

const Card = ({ data, index }: Props) => {
  const maxSlide = 4;

  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.combination);
  const { value: cover } = useAppSelector((state) => state.cover);
  const { value: collection } = useAppSelector((state) => state.collection);
  const { value: conserved } = useAppSelector((state) => state.conserved);

  const primary = data.primary;
  const secondary = data.secondary;

  const preview = coverPreview[cover];

  const customId = `${primary.hex}${secondary.hex}`;
  const isAdded = collection.find((item) => item.id === customId);
  const isLocked = conserved.find((item) => item.id === customId);

  const [slideIllustration, setSlideIllustration] = useState(index % maxSlide);
  const [slidePattern, setSlidePattern] = useState(index % maxSlide);
  const [slideGradient, setSlideGradient] = useState(index % maxSlide);

  const [isIllustrationSwap, setIsIllustrationSwap] = useState(false);
  const [isPatternSwap, setIsPatternSwap] = useState(false);
  const [isGradientSwap, setIsGradientSwap] = useState(false);

  const contrastRatio = useMemo(() => {
    return getContrast(primary.hex, secondary.hex);
  }, [primary.hex, secondary.hex]);

  const addToCollection = () => {
    const now = new Date();

    const payload = {
      id: customId,
      createdAt: now.getTime(),
      target: coverPreview[cover],
      colorPair: data,
    };

    if (isAdded === undefined) {
      if (collection.length <= 99) {
        dispatch(addItem(payload));
      } else {
        window.alert('Has reached the maximum limit');
      }
    }
  };

  const removeFromCollection = () => {
    dispatch(removeItem(customId));
  };

  const addToConserved = () => {
    const payload = {
      id: customId,
      index: index,
      primary: data.primary,
      secondary: data.secondary,
    };

    if (isLocked === undefined) {
      if (conserved.length <= 5) {
        dispatch(lock(payload));
      } else {
        window.alert('Has reached the maximum limit');
      }
    }
  };

  const removeFromConserved = () => {
    dispatch(unlock(customId));
  };

  const goToSlide = (slideName: string, slideIndex: number) => {
    if (slideName === 'illustration') {
      setSlideIllustration(slideIndex);
    }
    if (slideName === 'pattern') {
      setSlidePattern(slideIndex);
    }
    if (slideName === 'gradient') {
      setSlideGradient(slideIndex);
    }
  };

  const nextSlide = (slideName: string) => {
    if (slideName === 'illustration') {
      const afterSlide = slideIllustration + 1;
      setSlideIllustration(afterSlide % maxSlide);
    }
    if (slideName === 'pattern') {
      const afterSlide = slidePattern + 1;
      setSlidePattern(afterSlide % maxSlide);
    }
    if (slideName === 'gradient') {
      const afterSlide = slideGradient + 1;
      setSlideGradient(afterSlide % maxSlide);
    }
  };

  const prevSlide = (slideName: string) => {
    if (slideName === 'illustration') {
      const afterSlide = slideIllustration - 1;
      setSlideIllustration(afterSlide < 0 ? maxSlide - 1 : afterSlide);
    }
    if (slideName === 'pattern') {
      const afterSlide = slidePattern - 1;
      setSlidePattern(afterSlide < 0 ? maxSlide - 1 : afterSlide);
    }
    if (slideName === 'gradient') {
      const afterSlide = slideGradient - 1;
      setSlideGradient(afterSlide < 0 ? maxSlide - 1 : afterSlide);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardDisplay}>
        {loading ? (
          <>
            {!isLocked ? (
              <div>
                <PreviewSolid
                  loading={loading}
                  primary={primary}
                  secondary={secondary}
                />
              </div>
            ) : (
              <>
                {(cover === 0 || cover > 5) && (
                  <div>
                    <PreviewSolid primary={primary} secondary={secondary} />
                  </div>
                )}

                {preview === 'Illustration' && (
                  <div>
                    <PreviewIllustration
                      primary={primary}
                      secondary={secondary}
                      slideIllustration={slideIllustration}
                      isIllustrationSwap={isIllustrationSwap}
                    />
                  </div>
                )}

                {preview === 'Pattern' && (
                  <div>
                    <PreviewPattern
                      primary={primary}
                      secondary={secondary}
                      slidePattern={slidePattern}
                      isPatternSwap={isPatternSwap}
                    />
                  </div>
                )}

                {preview === 'Text' && (
                  <div>
                    <PreviewText primary={primary} secondary={secondary} />
                  </div>
                )}

                {preview === 'Gradient' && (
                  <div>
                    <PreviewGradient
                      primary={primary}
                      secondary={secondary}
                      slideGradient={slideGradient}
                      isGradientSwap={isGradientSwap}
                    />
                  </div>
                )}

                <div className={styles.topRightFloatButton}>
                  <button className={styles.buttonIcon}>
                    {isAdded ? <BsFillFolderFill /> : <BsFolderPlus />}
                  </button>
                  <button className={styles.buttonIcon}>
                    <HiLockClosed />
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className={styles.topRightFloatButton}>
              {isAdded ? (
                <button
                  className={styles.buttonIcon}
                  aria-label="Remove from My Collection"
                  title="Remove from My Collection"
                  onClick={() => removeFromCollection()}
                >
                  <BsFillFolderFill />
                </button>
              ) : (
                <button
                  className={styles.buttonIcon}
                  aria-label="Add to My Collection"
                  title="Add to My Collection"
                  onClick={() => addToCollection()}
                >
                  <BsFolderPlus />
                </button>
              )}

              {isLocked ? (
                <button
                  className={styles.buttonIcon}
                  aria-label="Unlock these color pairs"
                  title="Unlock these color pairs"
                  onClick={() => removeFromConserved()}
                >
                  <HiLockClosed />
                </button>
              ) : (
                <button
                  className={styles.buttonIcon}
                  aria-label="Lock these color pairs"
                  title="Lock these color pairs"
                  onClick={() => addToConserved()}
                >
                  <HiOutlineLockOpen />
                </button>
              )}
            </div>

            {(cover === 0 || cover > 5) && (
              <div>
                <PreviewSolid primary={primary} secondary={secondary} />
              </div>
            )}

            {preview === 'Illustration' && (
              <div>
                <div>
                  <PreviewIllustration
                    primary={primary}
                    secondary={secondary}
                    slideIllustration={slideIllustration}
                    isIllustrationSwap={isIllustrationSwap}
                  />
                </div>

                <div className={styles.topleftFloat}>
                  <button
                    aria-label="Swap Color"
                    className={`${styles.swapButton} ${
                      isIllustrationSwap ? styles.swapButtonActive : null
                    }`}
                    onClick={() => setIsIllustrationSwap((prev) => !prev)}
                    title="Swap Color"
                  >
                    <HiMiniArrowsRightLeft />
                  </button>
                </div>

                <div className={styles.indicator}>
                  <IndicatorSlider
                    currentSlide={slideIllustration}
                    pagingDotsIndices={Array.from(
                      { length: maxSlide },
                      (x, i) => i
                    )}
                    slideName="illustration"
                    goToSlide={goToSlide}
                  />
                </div>

                <div className={styles.slideButton}>
                  <SlideButton
                    direction="prev"
                    onClick={() => prevSlide('illustration')}
                  />
                  <SlideButton
                    direction="next"
                    onClick={() => nextSlide('illustration')}
                  />
                </div>
              </div>
            )}

            {preview === 'Pattern' && (
              <div>
                <div>
                  <PreviewPattern
                    primary={primary}
                    secondary={secondary}
                    slidePattern={slidePattern}
                    isPatternSwap={isPatternSwap}
                  />
                </div>

                <div className={styles.topleftFloat}>
                  <button
                    aria-label="Swap Color"
                    className={`${styles.swapButton} ${
                      isPatternSwap ? styles.swapButtonActive : null
                    }`}
                    onClick={() => setIsPatternSwap((prev) => !prev)}
                    title="Swap Color"
                  >
                    <HiMiniArrowsRightLeft />
                  </button>
                </div>
                <div className={styles.indicator}>
                  <IndicatorSlider
                    currentSlide={slidePattern}
                    pagingDotsIndices={Array.from(
                      { length: maxSlide },
                      (x, i) => i
                    )}
                    slideName="pattern"
                    goToSlide={goToSlide}
                  />
                </div>
                <div className={styles.slideButton}>
                  <SlideButton
                    direction="prev"
                    onClick={() => prevSlide('pattern')}
                  />
                  <SlideButton
                    direction="next"
                    onClick={() => nextSlide('pattern')}
                  />
                </div>
              </div>
            )}

            {preview === 'Text' && (
              <div>
                <PreviewText
                  primary={primary}
                  secondary={secondary}
                  contrastRatio={contrastRatio}
                />
              </div>
            )}

            {preview === 'Gradient' && (
              <div>
                <div>
                  <PreviewGradient
                    primary={primary}
                    secondary={secondary}
                    slideGradient={slideGradient}
                    isGradientSwap={isGradientSwap}
                  />
                </div>

                <div className={styles.topleftFloat}>
                  <button
                    aria-label="Swap Color"
                    className={`${styles.swapButton} ${
                      isGradientSwap ? styles.swapButtonActive : null
                    }`}
                    onClick={() => setIsGradientSwap((prev) => !prev)}
                    title="Swap Color"
                  >
                    <HiMiniArrowsRightLeft />
                  </button>
                </div>
                <div className={styles.indicator}>
                  <IndicatorSlider
                    currentSlide={slideGradient}
                    pagingDotsIndices={Array.from(
                      { length: maxSlide },
                      (x, i) => i
                    )}
                    slideName="gradient"
                    goToSlide={goToSlide}
                  />
                </div>
                <div className={styles.slideButton}>
                  <SlideButton
                    direction="prev"
                    onClick={() => prevSlide('gradient')}
                  />
                  <SlideButton
                    direction="next"
                    onClick={() => nextSlide('gradient')}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.cardButtonWrap}>
          <ButtonCopy
            color={primary}
            loading={loading}
            isLocked={Boolean(isLocked)}
          />
          <ButtonCopy
            color={secondary}
            loading={loading}
            isLocked={Boolean(isLocked)}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
