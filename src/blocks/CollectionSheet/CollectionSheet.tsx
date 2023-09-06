import React, { SetStateAction } from 'react';
import Sheet from 'react-modal-sheet';
import { BsFolderFill } from 'react-icons/bs';

import { useAppSelector } from '@/src/redux/hooks';

import CollectionItem from '@/src/components/CollectionItem/CollectionItem';

import styles from './CollectionSheet.module.css';

interface Props {
  isOpenSheet: boolean;
  setIsOpenSheet: React.Dispatch<SetStateAction<boolean>>;
}

const CollectionSheet = ({ isOpenSheet, setIsOpenSheet }: Props) => {
  const { value: collection } = useAppSelector((state) => state.collection);

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
              <span>My Collection ({collection.length})</span>
            </h2>
          </div>
          <div className={styles.content}>
            {collection.length >= 1 ? (
              <div className={styles.boxList}>
                {collection.map((item, index) => {
                  return (
                    <CollectionItem key={item.id} data={item} num={index} />
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyData}>
                <p>You have not saved any color pairs yet</p>
              </div>
            )}
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
