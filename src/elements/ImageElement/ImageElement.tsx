import Image, { StaticImageData } from 'next/image';

import styles from './ImageElement.module.css';

interface Props {
  alt: string;
  src: StaticImageData;
}

const ImageElement = ({ src, alt }: Props) => {
  return (
    <div className={styles.responsiveImageWrapper}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="480px"
        priority
        placeholder="blur"
      />
    </div>
  );
};

export default ImageElement;
