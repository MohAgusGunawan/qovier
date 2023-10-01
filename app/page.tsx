import { colorThumbnail } from '@/src/data/color';
import { coverPreview } from '@/src/data/coverPreview';
import { lolKey } from '@/src/data/lolKey';

import Client from './Client';

export default function Home() {
  return (
    <Client
      colorThumbnail={colorThumbnail}
      coverPreview={coverPreview}
      lolSecretKey={lolKey}
    />
  );
}
