import { colorThumbnail } from '@/src/data/color';
import { coverPreview } from '@/src/data/coverPreview';

import Client from './Client';
import {
  lolKeyA,
  lolKeyB,
  lolKeyC,
  lolKeyD,
  lolKeyE,
  lolKeyF,
} from '@/src/data/lolKey';

export default function Home() {
  return (
    <Client
      colorThumbnail={colorThumbnail}
      coverPreview={coverPreview}
      lolSecretKey={lolKeyA + lolKeyB + lolKeyC + lolKeyD + lolKeyE + lolKeyF}
    />
  );
}
