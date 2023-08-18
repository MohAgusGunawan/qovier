import { CSSProperties } from 'react';

export interface MyCustomCSS extends CSSProperties {
  '--color': string;
}

export interface ColorType {
  name: string;
  displayColor: {
    circle: string;
    gradientEnd: string;
  };
}
