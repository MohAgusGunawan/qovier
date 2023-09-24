import fontColorContrast from 'font-color-contrast';

import styles from './IllustrationTwoSVG.module.css';

interface Props {
  mainColor: string;
  accentColor: string;
}

const IllustrationTwoSVG = ({ mainColor, accentColor }: Props) => {
  const adaptiveMainColor = fontColorContrast(mainColor);

  return (
    <svg
      viewBox="0 0 336 210"
      fill="none"
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1065_218)">
        <rect width="336" height="210" rx="16" fill={`#${mainColor}`} />
        <line
          x1="25"
          y1="154"
          y2="154"
          stroke={adaptiveMainColor}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="151"
          y1="120.5"
          x2="116"
          y2="120.5"
          stroke={adaptiveMainColor}
          strokeDasharray="4 4"
        />
        <path
          d="M452.5 105.5C452.5 196.657 383.075 270.5 297.5 270.5C211.925 270.5 142.5 196.657 142.5 105.5C142.5 14.3432 211.925 -59.5 297.5 -59.5C383.075 -59.5 452.5 14.3432 452.5 105.5Z"
          fill="white"
          stroke="#808080"
        />
        <path
          d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5H320C328.56 0.5 335.5 7.43959 335.5 16V23.5H0.5V16Z"
          fill="white"
          stroke="black"
        />
        <rect
          x="198"
          y="56.5"
          width="99"
          height="47"
          rx="3.5"
          fill="#D9D9D9"
          stroke="#808080"
        />
        <rect x="192" y="136" width="111" height="8" rx="4" fill="#D9D9D9" />
        <rect x="208" y="120" width="79" height="8" rx="4" fill="#D9D9D9" />
        <rect
          x="208.5"
          y="160.5"
          width="78"
          height="15"
          rx="7.5"
          fill={`#${accentColor}`}
          stroke="#808080"
        />
        <rect
          x="0.5"
          y="0.5"
          width="335"
          height="209"
          rx="15.5"
          stroke="black"
        />
        <rect
          x="49.94"
          y="158.02"
          width="9.12"
          height="16.48"
          rx="3.5"
          fill={adaptiveMainColor}
          stroke="#808080"
        />
        <rect
          x="85.82"
          y="158.02"
          width="9.12"
          height="16.48"
          rx="3.5"
          fill={adaptiveMainColor}
          stroke="#808080"
        />
        <rect
          x="43.5"
          y="60.5"
          width="57.88"
          height="107.56"
          rx="7.5"
          stroke={adaptiveMainColor}
        />
        <mask id="path-15-inside-1_1065_218" fill="white">
          <path d="M43 123.2C43 118.782 46.5817 115.2 51 115.2H93.88C98.2983 115.2 101.88 118.782 101.88 123.2V160.56C101.88 164.978 98.2983 168.56 93.88 168.56H51C46.5817 168.56 43 164.978 43 160.56V123.2Z" />
        </mask>
        <path
          d="M43 123.2C43 118.782 46.5817 115.2 51 115.2H93.88C98.2983 115.2 101.88 118.782 101.88 123.2V160.56C101.88 164.978 98.2983 168.56 93.88 168.56H51C46.5817 168.56 43 164.978 43 160.56V123.2Z"
          fill={adaptiveMainColor === '#000000' ? '#2b2b2b' : adaptiveMainColor}
        />
        <path
          d="M43 115.2H101.88H43ZM101.88 160.56C101.88 165.531 97.8506 169.56 92.88 169.56H52C47.0294 169.56 43 165.531 43 160.56C43 164.426 46.5817 167.56 51 167.56H93.88C98.2983 167.56 101.88 164.426 101.88 160.56ZM43 168.56V115.2V168.56ZM101.88 115.2V168.56V115.2Z"
          fill="#808080"
          mask="url(#path-15-inside-1_1065_218)"
        />
        <circle cx="72.5" cy="95.42" r="11.5" fill="white" />
        <circle
          cx="72.5"
          cy="95.5"
          r="9"
          fill={`#${accentColor}`}
          stroke="#808080"
        />
        <path
          d="M62.8534 68.5L56.9867 60.5H88.0133L82.1466 68.5H62.8534Z"
          stroke={adaptiveMainColor}
        />
        <circle cx="50.36" cy="66.44" r="2.76" fill={adaptiveMainColor} />
        <circle
          cx="49.44"
          cy="160.28"
          r="1.84"
          fill={adaptiveMainColor === '#ffffff' ? '#000000' : '#ffffff'}
        />
        <circle
          cx="49.44"
          cy="122.84"
          r="1.84"
          fill={adaptiveMainColor === '#ffffff' ? '#000000' : '#ffffff'}
        />
        <circle cx="94.52" cy="66.44" r="2.76" fill={adaptiveMainColor} />
        <circle
          cx="95.44"
          cy="160.28"
          r="1.84"
          fill={adaptiveMainColor === '#ffffff' ? '#000000' : '#ffffff'}
        />
        <circle
          cx="95.44"
          cy="122.84"
          r="1.84"
          fill={adaptiveMainColor === '#ffffff' ? '#000000' : '#ffffff'}
        />
        <circle
          cx="72.56"
          cy="141.56"
          r="15.56"
          stroke={adaptiveMainColor === '#ffffff' ? '#000000' : '#ffffff'}
          strokeWidth="2"
        />
        <circle cx="72.3131" cy="141.56" r="11.7132" fill={`#${accentColor}`} />
        <path
          d="M72.7 129.44V153.44M75.7 129.44V153.44M63.7 131.44L63.7 151.44M85.2 135.94L61.2 135.94M84.2 142.94L60.2 142.94M81.2 149.94H61.2M78.7 129.44V153.44M66.7 129.44V153.44M81.7 131.44V151.44M69.7 129.44V153.44"
          stroke={adaptiveMainColor}
        />
        <path
          d="M125.714 165.521L126.959 169.588L127.004 169.734L127.122 169.83L130.423 172.512L126.94 174.953L126.815 175.041L126.76 175.183L125.229 179.151L121.831 176.592L121.709 176.501L121.557 176.493L117.31 176.263L118.693 172.24L118.743 172.096L118.703 171.949L117.61 167.839L121.863 167.911L122.015 167.914L122.143 167.831L125.714 165.521Z"
          fill={`#${mainColor}`}
          stroke={adaptiveMainColor}
        />
        <path
          d="M34.7023 35.8657L37.1719 38.2416L37.2816 38.3471L37.4316 38.3736L40.8062 38.9695L39.3098 42.0524L39.2433 42.1894L39.2644 42.3402L39.7405 45.7338L36.3461 45.2633L36.1953 45.2424L36.0584 45.3091L32.978 46.8105L32.3766 43.4369L32.3499 43.287L32.2441 43.1774L29.8642 40.7117L32.8869 39.0972L33.0212 39.0255L33.0928 38.891L34.7023 35.8657Z"
          fill={`#${mainColor}`}
          stroke={adaptiveMainColor}
        />
        <path
          d="M20.7956 93.5529L28.144 100.901L18.1058 103.591L20.7956 93.5529Z"
          fill={adaptiveMainColor}
        />
        <path
          d="M130.728 84.7279L120.69 82.0382L128.038 74.6897L130.728 84.7279Z"
          fill={adaptiveMainColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_1065_218">
          <rect width="336" height="210" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IllustrationTwoSVG;
