import styles from './IndicatorSlider.module.css';

interface Props {
  pagingDotsIndices: number[];
  currentSlide: number;
  slideName: string;
  goToSlide: (slideName: string, pageIndex: number) => void;
}

const IndicatorSlider = ({
  pagingDotsIndices,
  goToSlide,
  currentSlide,
  slideName,
}: Props) => {
  return (
    <ul className={styles.indicatorSlider}>
      {pagingDotsIndices.map((dot) => (
        <li key={dot} className={styles.indicatorList}>
          <button
            onClick={() => goToSlide(slideName, dot)}
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
