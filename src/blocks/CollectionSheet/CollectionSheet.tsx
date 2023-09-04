import React, { SetStateAction } from 'react';
import Sheet from 'react-modal-sheet';
import { BsFolderFill } from 'react-icons/bs';

import CollectionItem from '@/src/components/CollectionItem/CollectionItem';

import styles from './CollectionSheet.module.css';

interface Props {
  isOpenSheet: boolean;
  setIsOpenSheet: React.Dispatch<SetStateAction<boolean>>;
}

const CollectionSheet = ({ isOpenSheet, setIsOpenSheet }: Props) => {
  return (
    <Sheet
      isOpen={isOpenSheet}
      onClose={() => setIsOpenSheet(false)}
      className={styles.sheet}
    >
      <Sheet.Container className={styles.container}>
        <Sheet.Header />
        <Sheet.Content disableDrag={true}>
          <div className={styles.haeder}>
            <h2 className={styles.title}>
              <BsFolderFill />
              <span>My Collection (43)</span>
            </h2>
          </div>
          <div className={styles.content}>
            {/* <div className={styles.emptyData}>
              <p>You have not saved any color pairs yet</p>
            </div> */}
            <div className={styles.boxList}>
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
            </div>
          </div>

          <div className={styles.footer}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpenSheet(false)}
            >
              Close
            </button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default CollectionSheet;
