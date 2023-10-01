import { ColorDetail, CustomColorType } from '@/src/types/ColorType';

import styles from './PreviewSolid.module.css';

interface Props {
  primary: ColorDetail;
  secondary: ColorDetail;
  loading?: boolean;
}

const PreviewSolid = ({ primary, secondary, loading }: Props) => {
  return (
    <div
      className={`${styles.cardPairColor} ${
        loading ? 'sparklingAnimation' : null
      }`}
      style={
        {
          '--first-color': `#${primary.hex}`,
          '--second-color': `#${secondary.hex}`,
        } as CustomColorType
      }
    />
  );
};

export default PreviewSolid;
