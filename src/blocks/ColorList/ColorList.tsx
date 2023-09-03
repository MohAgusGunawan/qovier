import { colorList } from '@/src/data/colorList';

import styles from './ColorList.module.css';

const ColorList = () => {
  return (
    <div className={styles.colorList}>
      <div className="wrapper">
        <h2 className={styles.heading}>Color List</h2>
        <p className={styles.paragraph}>
          Among the millions of colors available, here are some colors that we
          may already recognize based on their hue range. These colors can be
          used as color references the most likely filter to appear in the color
          results above.
        </p>

        {colorList.map((color, index) => {
          return (
            <div key={index} className={styles.containerList}>
              <h3 className={styles.title}>▪ {color.range} Range ▪</h3>
              <ul className={styles.boxColor}>
                {color.list.map((item, index) => {
                  return (
                    <li key={index} className={styles.itemColor}>
                      {item.popular && (
                        <span className={styles.colorRibbon}></span>
                      )}

                      <div
                        className={styles.colorCard}
                        style={{ background: item.hexCode }}
                      ></div>
                      <p
                        className={`${styles.colorName} ${
                          item.popular ? styles.colorNameBold : null
                        }`}
                      >
                        {item.name}
                      </p>
                      <p className={styles.colorCode}>{item.hexCode}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorList;
