'use client';

import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown, IoIosSwap } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { getContrast } from 'accessible-colors';
import { BsFolderPlus, BsFillFolderFill } from 'react-icons/bs';

import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';
import { addItem, removeItem } from '@/src/redux/features/collectionSlice';

import {
  ColorPair,
  CustomColorType,
  ColorIconType,
} from '@/src/types/ColorType';

import IllustrationOneSVG from '@/src/elements/IllustrationOneSVG/IllustrationOneSVG';
import IllustrationTwoSVG from '@/src/elements/IllustrationTwoSVG/IllustrationTwoSVG';
import IllustrationThreeSVG from '@/src/elements/IllustrationThreeSVG/IllustrationThreeSVG';
import IllustrationFourSVG from '@/src/elements/IllustrationFourSVG/IllustrationFourSVG';
import RatioBadge from '@/src/elements/RatioBadge/RatioBadge';
import SlideButton from '@/src/elements/SlideButton/SlideButton';
import IndicatorSlider from '@/src/elements/IndicatorSlider/IndicatorSlider';

import { coverPreview } from '@/src/data/coverPreview';

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

  const [slideIllustration, setSlideIllustration] = useState(index % maxSlide);
  const [slidePattern, setSlidePattern] = useState(index % maxSlide);
  const [slideGradient, setSlideGradient] = useState(index % maxSlide);

  const [isIllustrationSwap, setIsIllustrationSwap] = useState(false);
  const [isPatternSwap, setIsPatternSwap] = useState(false);
  const [isGradientSwap, setIsGradientSwap] = useState(false);

  const preview = coverPreview[cover];

  const primary = data.primary;
  const secondary = data.secondary;

  const customId = `${primary.hex}${secondary.hex}`;
  const isAdded = collection.find((item) => item.id === customId);

  const contrastRatio = useMemo(() => {
    return getContrast(primary.hex, secondary.hex);
  }, [primary.hex, secondary.hex]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast(`"${text}" copied`, {
          icon: <TbCopy />,
        });
      })
      .catch(() => {
        window.alert('Copy failed, please update your browser!');
      });
  }, []);

  const addToCollection = () => {
    const now = new Date();

    const payload = {
      id: customId,
      createdAt: {
        timestamp: now.getTime(),
        monthYear: now.toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
        }),
      },
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
          <div
            className={`${styles.cardPairColor} ${styles.sparklingAnimation}`}
            style={
              {
                '--first-color': `#${primary.hex}`,
                '--second-color': `#${secondary.hex}`,
              } as CustomColorType
            }
          />
        ) : (
          <>
            <div className={styles.addButtonWrapper}>
              {isAdded ? (
                <button
                  className={styles.addButton}
                  aria-label="Remove from My Collection"
                  title="Remove from My Collection"
                  onClick={() => removeFromCollection()}
                >
                  <BsFillFolderFill />
                </button>
              ) : (
                <button
                  className={styles.addButton}
                  aria-label="Add to My Collection"
                  title="Add to My Collection"
                  onClick={() => addToCollection()}
                >
                  <BsFolderPlus />
                </button>
              )}
            </div>

            {(cover === 0 || cover > 5) && (
              <div>
                <div
                  className={styles.cardPairColor}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                />
              </div>
            )}

            {preview === 'Illustration' && (
              <>
                <div className={styles.slide}>
                  {slideIllustration === 0 && (
                    <div className={styles.cardPairPreview}>
                      <IllustrationOneSVG
                        mainColor={
                          isIllustrationSwap ? secondary.hex : primary.hex
                        }
                        accentColor={
                          isIllustrationSwap ? primary.hex : secondary.hex
                        }
                      />
                    </div>
                  )}
                  {slideIllustration === 1 && (
                    <div className={styles.cardPairPreview}>
                      <IllustrationTwoSVG
                        mainColor={
                          isIllustrationSwap ? secondary.hex : primary.hex
                        }
                        accentColor={
                          isIllustrationSwap ? primary.hex : secondary.hex
                        }
                      />
                    </div>
                  )}
                  {slideIllustration === 2 && (
                    <div className={styles.cardPairPreview}>
                      <IllustrationThreeSVG
                        mainColor={
                          isIllustrationSwap ? secondary.hex : primary.hex
                        }
                        accentColor={
                          isIllustrationSwap ? primary.hex : secondary.hex
                        }
                      />
                    </div>
                  )}
                  {slideIllustration === 3 && (
                    <div className={styles.cardPairPreview}>
                      <IllustrationFourSVG
                        mainColor={
                          isIllustrationSwap ? secondary.hex : primary.hex
                        }
                        accentColor={
                          isIllustrationSwap ? primary.hex : secondary.hex
                        }
                      />
                    </div>
                  )}
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
                    <IoIosSwap />
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
              </>
            )}

            {preview === 'Pattern' && (
              <div className={styles.slide}>
                {slidePattern === 0 && (
                  <div
                    className={styles.cardPatternZigzag}
                    style={
                      {
                        '--first-color': `#${
                          isPatternSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isPatternSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                {slidePattern === 1 && (
                  <div
                    className={styles.cardPatternWindmill}
                    style={
                      {
                        '--first-color': `#${
                          isPatternSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isPatternSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                {slidePattern === 2 && (
                  <div
                    className={styles.cardPatternCircledot}
                    style={
                      {
                        '--first-color': `#${
                          isPatternSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isPatternSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                {slidePattern === 3 && (
                  <div
                    className={styles.cardPatternCircleWave}
                    style={
                      {
                        '--first-color': `#${
                          isPatternSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isPatternSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                <div className={styles.topleftFloat}>
                  <button
                    aria-label="Swap Color"
                    className={`${styles.swapButton} ${
                      isPatternSwap ? styles.swapButtonActive : null
                    }`}
                    onClick={() => setIsPatternSwap((prev) => !prev)}
                    title="Swap Color"
                  >
                    <IoIosSwap />
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
                <div
                  className={styles.cardTypoColor}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                >
                  <div className={styles.cardTypoColorMain}>
                    <p className={styles.cardTypoTextBold}>
                      Puos tenetur dolorum.
                    </p>
                    <p className={styles.cardTypoText}>
                      Eveniet sint maiores quisquam.
                    </p>
                  </div>
                  <div className={styles.cardTypoColorAccent}>
                    <p className={styles.cardTypoTextBold}>
                      Puos tenetur dolorum.
                    </p>
                    <p className={styles.cardTypoText}>
                      Eveniet sint maiores quisquam.
                    </p>
                  </div>
                  {contrastRatio && <RatioBadge ratio={contrastRatio} />}
                </div>
              </div>
            )}

            {preview === 'Gradient' && (
              <div className={styles.slide}>
                {slideGradient === 0 && (
                  <div
                    className={styles.cardLinearGradient}
                    style={
                      {
                        '--first-color': `#${
                          isGradientSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isGradientSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                {slideGradient === 1 && (
                  <div
                    className={styles.cardRadialGradient}
                    style={
                      {
                        '--first-color': `#${
                          isGradientSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isGradientSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                {slideGradient === 2 && (
                  <div
                    className={styles.cardLinearGradientRepeat}
                    style={
                      {
                        '--first-color': `#${
                          isGradientSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isGradientSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                {slideGradient === 3 && (
                  <div
                    className={styles.cardConicGradient}
                    style={
                      {
                        '--first-color': `#${
                          isGradientSwap ? secondary.hex : primary.hex
                        }`,
                        '--second-color': `#${
                          isGradientSwap ? primary.hex : secondary.hex
                        }`,
                      } as CustomColorType
                    }
                  />
                )}

                <div className={styles.topleftFloat}>
                  <button
                    aria-label="Swap Color"
                    className={`${styles.swapButton} ${
                      isGradientSwap ? styles.swapButtonActive : null
                    }`}
                    onClick={() => setIsGradientSwap((prev) => !prev)}
                    title="Swap Color"
                  >
                    <IoIosSwap />
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
          <div className={styles.buttonWrap}>
            <Menu>
              <Menu.Button className={styles.menuButton} disabled={loading}>
                <span
                  className="colorIcon"
                  style={
                    {
                      '--color': `#${primary.hex}`,
                    } as ColorIconType
                  }
                />
                <span className={styles.mbLabel}>
                  {loading ? '#######' : `#${primary.hex.toUpperCase()}`}
                </span>
                <IoIosArrowDown />
              </Menu.Button>
              {!loading && (
                <Transition
                  as={Fragment}
                  enter="at-enterTransition"
                  enterFrom="at-fadeSlideOut"
                  enterTo="at-fadeSlideIn"
                  leave="at-leaveTransition"
                  leaveFrom="at-fadeSlideIn"
                  leaveTo="at-fadeSlideOut"
                >
                  <Menu.Items className={styles.menuItems}>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(primary.hex)}
                        >
                          <TbCopy />
                          <span>HEX ({primary.hex.toLocaleUpperCase()})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(String(primary.rgb))}
                        >
                          <TbCopy />
                          <span>RGB ({String(primary.rgb)})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() =>
                            handleCopy(
                              `${primary.hsl[0]}°,${primary.hsl[1]}%,${primary.hsl[2]}%`
                            )
                          }
                        >
                          <TbCopy />
                          <span>HSL ({String(primary.hsl)})</span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              )}
            </Menu>
          </div>
          <div className={styles.buttonWrap}>
            <Menu>
              <Menu.Button className={styles.menuButton} disabled={loading}>
                <span
                  className="colorIcon"
                  style={
                    {
                      '--color': `#${secondary.hex}`,
                    } as ColorIconType
                  }
                />
                <span className={styles.mbLabel}>
                  {loading ? '#######' : `#${secondary.hex.toUpperCase()}`}
                </span>
                <IoIosArrowDown />
              </Menu.Button>
              {!loading && (
                <Transition
                  as={Fragment}
                  enter="at-enterTransition"
                  enterFrom="at-fadeSlideOut"
                  enterTo="at-fadeSlideIn"
                  leave="at-leaveTransition"
                  leaveFrom="at-fadeSlideIn"
                  leaveTo="at-fadeSlideOut"
                >
                  <Menu.Items className={styles.menuItems}>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(secondary.hex)}
                        >
                          <TbCopy />
                          <span>HEX ({secondary.hex.toLocaleUpperCase()})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() => handleCopy(String(secondary.rgb))}
                        >
                          <TbCopy />
                          <span>RGB ({String(secondary.rgb)})</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${styles.menuCopyButton} ${
                            active ? styles.menuCopyButtonActive : null
                          }`}
                          onClick={() =>
                            handleCopy(
                              `${secondary.hsl[0]}°,${secondary.hsl[1]}%,${secondary.hsl[2]}%`
                            )
                          }
                        >
                          <TbCopy />
                          <span>HSL ({String(secondary.hsl)})</span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
