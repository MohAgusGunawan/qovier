import styles from './IllustrationTwoSVG.module.css';

interface Props {
  mainColor: string;
  accentColor: string;
}

const IllustrationTwoSVG = ({ mainColor, accentColor }: Props) => {
  return (
    <svg
      viewBox="0 0 336 210"
      fill="none"
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1058_7)">
        <rect width="336" height="210" rx="16" fill={`#${mainColor}`} />
        <rect
          x="96"
          y="-51"
          width="86"
          height="168"
          rx="7"
          fill={`#${accentColor}`}
        />
        <rect
          x="110"
          y="-32"
          width="59"
          height="135"
          rx="3"
          fill={`#${mainColor}`}
        />
        <path
          d="M393.5 105.5C393.5 180.088 336.612 240.5 266.5 240.5C196.388 240.5 139.5 180.088 139.5 105.5C139.5 30.9125 196.388 -29.5 266.5 -29.5C336.612 -29.5 393.5 30.9125 393.5 105.5Z"
          fill="white"
          stroke="#808080"
        />
        <circle cx="229" cy="187" r="2" fill="#E7E7E7" />
        <circle cx="237" cy="187" r="2" fill="black" />
        <circle cx="245" cy="187" r="2" fill="#D9D9D9" />
        <circle cx="253" cy="187" r="2" fill="#D9D9D9" />
        <rect
          x="-64"
          y="116.765"
          width="65.7647"
          height="127.009"
          rx="7"
          transform="rotate(-90 -64 116.765)"
          fill={`#${accentColor}`}
        />
        <rect
          x="-50"
          y="105.313"
          width="43.0503"
          height="99"
          rx="3"
          transform="rotate(-90 -50 105.313)"
          fill={`#${mainColor}`}
        />
        <path
          d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5H320C328.56 0.5 335.5 7.43959 335.5 16V23.5H0.5V16Z"
          fill="white"
          stroke="black"
        />
        <rect
          x="191"
          y="50.5"
          width="99"
          height="47"
          rx="3.5"
          fill="#D9D9D9"
          stroke="#808080"
        />
        <rect x="185" y="130" width="111" height="8" rx="4" fill="#D9D9D9" />
        <rect x="201" y="114" width="79" height="8" rx="4" fill="#D9D9D9" />
        <rect
          x="201.5"
          y="154.5"
          width="78"
          height="15"
          rx="7.5"
          fill={`#${accentColor}`}
          stroke="#808080"
        />
        <rect
          x="-19"
          y="155"
          width="138"
          height="148"
          rx="7"
          fill={`#${accentColor}`}
        />
        <rect
          x="-1.0002"
          y="169"
          width="106"
          height="91"
          rx="3"
          fill={`#${mainColor}`}
        />
        <rect
          x="0.5"
          y="0.5"
          width="335"
          height="209"
          rx="15.5"
          stroke="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1058_7">
          <rect width="336" height="210" rx="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IllustrationTwoSVG;
