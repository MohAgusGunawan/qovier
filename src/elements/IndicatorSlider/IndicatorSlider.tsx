import styles from './IndicatorSlider.module.css';

interface Props {
  pagingDotsIndices: number[];
  currentSlide: number;
  goToSlide: (pageIndex: number) => void;
}

const IndicatorSlider = ({
  pagingDotsIndices,
  goToSlide,
  currentSlide,
}: Props) => {
  return (
    <ul className={styles.indicatorSlider}>
      {pagingDotsIndices.map((dot) => (
        <li key={dot} className={styles.indicatorList}>
          <button
            onClick={() => goToSlide(dot)}
            className={`${styles.indicatorDot} ${
              currentSlide === dot ? styles.indicatorDotActive : null
            }`}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default IndicatorSlider;
