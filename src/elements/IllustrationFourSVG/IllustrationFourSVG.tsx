import fontColorContrast from 'font-color-contrast';

import styles from './IllustrationFourSVG.module.css';

interface Props {
  mainColor: string;
  accentColor: string;
}

function IllustrationFourSVG({ mainColor, accentColor }: Props) {
  const adaptiveMainColor = fontColorContrast(mainColor);

  return (
    <svg
      viewBox="0 0 256 222"
      fill="none"
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1061_65)">
        <rect width="120" height="203" rx="8" fill={`#${mainColor}`} />
        <rect
          x="28"
          y="36"
          width="64"
          height="102"
          rx="7"
          fill={`#${accentColor}`}
          stroke={adaptiveMainColor}
          strokeWidth="2"
        />
        <rect
          x="38"
          y="47"
          width="44"
          height="61"
          rx="3"
          fill={`#${mainColor}`}
          stroke={adaptiveMainColor}
          strokeWidth="2"
        />
        <path
          d="M351.5 271C351.5 312.97 318.968 351.089 266.097 378.744C213.25 406.387 140.208 423.5 59.5 423.5C-21.2076 423.5 -94.2499 406.387 -147.097 378.744C-199.968 351.089 -232.5 312.97 -232.5 271C-232.5 229.03 -199.968 190.911 -147.097 163.256C-94.2499 135.613 -21.2076 118.5 59.5 118.5C140.208 118.5 213.25 135.613 266.097 163.256C318.968 190.911 351.5 229.03 351.5 271Z"
          fill="white"
          stroke="#808080"
        />
        <rect
          x="0.5"
          y="0.5"
          width="119"
          height="202"
          rx="7.5"
          stroke="black"
        />
        <rect
          x="28.5"
          y="143.5"
          width="62"
          height="13"
          rx="6.5"
          fill={`#${accentColor}`}
          stroke="#808080"
        />
        <circle cx="48" cy="175" r="2" fill="#E7E7E7" />
        <circle cx="56" cy="175" r="2" fill="black" />
        <circle cx="64" cy="175" r="2" fill="#D9D9D9" />
        <circle cx="72" cy="175" r="2" fill="#D9D9D9" />
        <line x1="42" y1="14.5" x2="78" y2="14.5" stroke={adaptiveMainColor} />
      </g>
      <g clipPath="url(#clip1_1061_65)">
        <rect x="136" y="19" width="120" height="203" rx="8" fill="white" />
        <rect
          x="136.5"
          y="19.5"
          width="119"
          height="202"
          rx="7.5"
          stroke="black"
        />
        <path
          d="M136.5 27C136.5 22.8579 139.858 19.5 144 19.5H248C252.142 19.5 255.5 22.8579 255.5 27V33.5H136.5V27Z"
          fill={`#${mainColor}`}
          stroke="black"
        />
        <line x1="178" y1="215.5" x2="214" y2="215.5" stroke="black" />
        <rect
          x="146.5"
          y="44.5"
          width="99"
          height="47"
          rx="3.5"
          fill="#D9D9D9"
          stroke="#808080"
        />
        <rect x="146" y="100" width="59" height="14" rx="7" fill="#D9D9D9" />
        <rect
          x="209.5"
          y="100.5"
          width="36"
          height="13"
          rx="6.5"
          fill={`#${accentColor}`}
          stroke="#808080"
        />
        <rect
          x="146.5"
          y="130.5"
          width="99"
          height="47"
          rx="3.5"
          fill="#D9D9D9"
          stroke="#808080"
        />
        <rect x="146" y="186" width="59" height="14" rx="7" fill="#D9D9D9" />
        <rect
          x="209.5"
          y="186.5"
          width="36"
          height="13"
          rx="6.5"
          fill={`#${accentColor}`}
          stroke="#808080"
        />
      </g>
      <defs>
        <clipPath id="clip0_1061_65">
          <rect width="120" height="203" fill="white" />
        </clipPath>
        <clipPath id="clip1_1061_65">
          <rect
            width="120"
            height="203"
            fill="white"
            transform="translate(136 19)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IllustrationFourSVG;
