import React, { Fragment, SetStateAction } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

import styles from './ColorPicker.module.css';

interface Props {
  label: string;
  codeColor: string;
  setCodeColor: React.Dispatch<SetStateAction<string>>;
}

const ColorPicker = ({ label, codeColor, setCodeColor }: Props) => {
  return (
    <div className={styles.inputColorWrap}>
      <label className={styles.inputColorLabel} htmlFor="input-text-color">
        {label} :
      </label>
      <div className={styles.inputColor}>
        <Popover>
          <Popover.Button
            className={styles.buttonColorPicker}
            aria-label="Color Picker"
          >
            <span
              className={styles.thumbnailColor}
              style={{ background: codeColor }}
            ></span>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="at-enterTransition"
            enterFrom="at-fadeSlideOut"
            enterTo="at-fadeSlideIn"
            leave="at-leaveTransition"
            leaveFrom="at-fadeSlideIn"
            leaveTo="at-fadeSlideOut"
          >
            <Popover.Panel className={styles.popoverPanel}>
              <div className="customColorPicker">
                <HexColorPicker color={codeColor} onChange={setCodeColor} />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <HexColorInput
          color={codeColor}
          onChange={setCodeColor}
          className={styles.inputColorText}
          id="input-text-color"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
