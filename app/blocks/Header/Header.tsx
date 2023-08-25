import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <svg
          className={styles.logo}
          viewBox="0 0 33 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3.52152C0 1.57664 1.57664 0 3.52152 0C4.52567 0 5.48205 0.42867 6.15023 1.17824L16.4716 12.7568C16.7341 13.0512 16.9607 13.3757 17.147 13.7234L20.5378 20.0549C22.3216 23.3857 19.9084 27.4154 16.13 27.4154H5C2.23857 27.4154 0 25.1768 0 22.4154V3.52152Z"
            fill="#2F2F2F"
          />
          <path
            d="M33 22.9879C33 24.4673 31.8007 25.6667 30.3212 25.6667C29.3363 25.6667 28.4308 25.1262 27.9633 24.2593L22.2039 13.5782C22.0682 13.3265 21.9112 13.087 21.7345 12.8621L17.9667 8.06666C15.8807 5.84161 17.4584 2.19999 20.5083 2.19999L28 2.19999C30.7614 2.19999 33 4.43857 33 7.19999L33 22.9879Z"
            fill="#515151"
          />
        </svg>
      </div>

      <h1 className={styles.headline}>Qovier</h1>
      <p className={styles.paragraph}>
        Generator of beautiful two color combinations, explore color pairs for
        your designs.
      </p>
    </header>
  );
};

export default Header;
