import { CSSProperties } from 'react';
import { coverPreview } from '@/src/data/coverPreview';

export interface ColorIconType extends CSSProperties {
  '--color': string;
}

export interface CustomColorType extends CSSProperties {
  '--first-color': string;
  '--second-color': string;
}

export interface ColorType {
  name: string;
  displayColor: {
    circle: string;
    gradientEnd: string;
  };
}

export interface ColorDetail {
  range: string;
  name: string;
  hex: string;
  hsl: number[];
  rgb: number[];
}

export interface ColorPair {
  primary: ColorDetail;
  secondary: ColorDetail;
}

export interface Collection {
  id: string;
  createdAt: number;
  target: string;
  colorPair: ColorPair;
}
