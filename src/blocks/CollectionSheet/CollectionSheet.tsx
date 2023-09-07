import React, { SetStateAction } from 'react';
import Sheet from 'react-modal-sheet';
import { BsFolderFill } from 'react-icons/bs';

import { useAppSelector } from '@/src/redux/hooks';

import EmptyCollection from '@/src/components/EmptyCollection/EmptyCollection';
import CollectionItem from '@/src/components/CollectionItem/CollectionItem';

import styles from './CollectionSheet.module.css';

interface Props {
  isOpenSheet: boolean;
  setIsOpenSheet: React.Dispatch<SetStateAction<boolean>>;
}

const CollectionSheet = ({ isOpenSheet, setIsOpenSheet }: Props) => {
  const { value: collection } = useAppSelector((state) => state.collection);

  const groupByMonthYear = collection.map((item) => {
    const date = new Date(item.createdAt);
    return {
      ...item,
      monthYear: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      }),
    };
  });

  const collectionSort = Array.from(new Set(groupByMonthYear)).sort((a, b) => {
    const aDate = new Date(a.monthYear).getTime();
    const bDate = new Date(b.monthYear).getTime();

    return bDate - aDate;
  });

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
                {collectionSort.map((item, index) => {
                  const currentMonthYear = item.monthYear;
                  const prevMonthYear =
                    index === 0 ? 'First' : collectionSort[index - 1].monthYear;

                  return (
                    <div className={styles.boxListGroup} key={item.id}>
                      {currentMonthYear !== prevMonthYear && (
                        <time
                          dateTime={currentMonthYear}
                          className={styles.monthYear}
                        >
                          {currentMonthYear}
                        </time>
                      )}
                      <CollectionItem data={item} num={index} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <EmptyCollection />
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
