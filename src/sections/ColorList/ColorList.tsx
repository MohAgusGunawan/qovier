import fontColorContrast from 'font-color-contrast';

import styles from './ColorList.module.css';

interface Props {
  colorThumbnail: {
    name: string;
    hexcode: string;
  }[];
  openModal: (range: string) => void;
}

const ColorList = ({ colorThumbnail, openModal }: Props) => {
  return (
    <div className={styles.colorList}>
      <div className="wrapper">
        <h2 className={styles.colorListHeading}>List of Colors</h2>
        <p className={styles.colorListParagraph}>
          Among the millions of available colors, here are some colors that we
          may already recognize based on their hue range. These colors can be
          used as the most likely color references to appear in the color
          results above.{' '}
          <span className={styles.emphasis}>
            *Click the card to see the full list of colors!
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
  );
};

export default ColorList;
