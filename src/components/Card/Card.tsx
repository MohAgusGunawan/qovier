'use client';

import React, { Fragment, useCallback, useMemo } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Carousel, { InternalCarouselProps } from 'nuka-carousel';
import { IoIosArrowDown } from 'react-icons/io';
import { TbCopy } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { getContrast } from 'accessible-colors';

import { useAppSelector } from '@/src/redux/hooks';

import {
  ColorPair,
  CustomColorType,
  ColorIconType,
} from '@/src/types/ColorType';

import IllustrationOneSVG from '@/src/elements/IllustrationOneSVG/IllustrationOneSVG';
import IllustrationTwoSVG from '@/src/elements/IllustrationTwoSVG/IllustrationTwoSVG';
import IllustrationThreeSVG from '@/src/elements/IllustrationThreeSVG/IllustrationThreeSVG';
import RatioBadge from '@/src/elements/RatioBadge/RatioBadge';
import IndicatorSlider from '@/src/elements/IndicatorSlider/IndicatorSlider';

import styles from './Card.module.css';

type Props = {
  data: ColorPair;
  index: number;
};

const Card = ({ data, index }: Props) => {
  const { loading } = useAppSelector((state) => state.combination);
  const { value: cover } = useAppSelector((state) => state.cover);

  const primary = data.primary;
  const secondary = data.secondary;

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

  const carouselSettings: Partial<InternalCarouselProps> = useMemo(() => {
    return {
      wrapAround: true,
      slideIndex: index % 3,
      renderCenterRightControls: null,
      renderCenterLeftControls: null,
      renderBottomCenterControls: null,
      renderBottomLeftControls: ({
        currentSlide,
        pagingDotsIndices,
        goToSlide,
      }) => (
        <IndicatorSlider
          currentSlide={currentSlide}
          pagingDotsIndices={pagingDotsIndices}
          goToSlide={goToSlide}
        />
      ),
    };
  }, [index]);

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

            {cover === 1 && (
              <Carousel {...carouselSettings}>
                <div className={styles.cardPairPreview}>
                  <IllustrationOneSVG
                    mainColor={primary.hex}
                    accentColor={secondary.hex}
                  />
                </div>
                <div className={styles.cardPairPreview}>
                  <IllustrationTwoSVG
                    mainColor={primary.hex}
                    accentColor={secondary.hex}
                  />
                </div>
                <div className={styles.cardPairPreview}>
                  <IllustrationThreeSVG
                    mainColor={primary.hex}
                    accentColor={secondary.hex}
                  />
                </div>
              </Carousel>
            )}

            {cover === 2 && (
              <Carousel {...carouselSettings}>
                <div
                  className={styles.cardPatternZigzag}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                />
                <div
                  className={styles.cardPatternWindmill}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                />
                <div
                  className={styles.cardPatternCircledot}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                />
              </Carousel>
            )}

            {cover === 3 && (
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

            {cover === 4 && (
              <Carousel {...carouselSettings}>
                <div
                  className={styles.cardLinearGradient}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                />
                <div
                  className={styles.cardRadialGradient}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                />
                <div
                  className={styles.cardConicGradient}
                  style={
                    {
                      '--first-color': `#${primary.hex}`,
                      '--second-color': `#${secondary.hex}`,
                    } as CustomColorType
                  }
                />
              </Carousel>
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
                          onClick={() => handleCopy(String(primary.hsl))}
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
                          onClick={() => handleCopy(String(secondary.hsl))}
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
