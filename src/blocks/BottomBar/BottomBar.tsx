'use client';

import React, { SetStateAction } from 'react';
import { TbLoader2 } from 'react-icons/tb';
import { HiFilter } from 'react-icons/hi';
import { BsFolderFill } from 'react-icons/bs';

import { useAppSelector } from '@/src/redux/hooks';

import Padlock from '@/src/components/Padlock/Padlock';

import styles from './BottomBar.module.css';

interface Props {
  scrollToFormFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setIsOpenSheet: React.Dispatch<SetStateAction<boolean>>;
}

const BottomBar = ({ scrollToFormFilter, setIsOpenSheet }: Props) => {
  const { loading: gettingCombination } = useAppSelector(
    (state) => state.combination
  );
  const { value: collection, loading: gettingCollection } = useAppSelector(
    (state) => state.collection
  );
  const { value: conserved } = useAppSelector((state) => state.conserved);

  return (
    <div className={styles.bottomBar}>
      {gettingCollection ? (
        <button className={styles.mobileCollectionButton} disabled={true}>
          <TbLoader2 className="rotateAnimation" />
          <span>Loading ...</span>
        </button>
      ) : (
        <>
          <Padlock num={conserved.length} />

          <button
            className={styles.mobileCollectionButton}
            onClick={() => setIsOpenSheet(true)}
            disabled={gettingCollection}
            title="My Color Pair Collection"
          >
            {gettingCollection ? (
              <>
                <TbLoader2 className="rotateAnimation" />
                <span>Loading ...</span>
              </>
            ) : (
              <>
                <BsFolderFill /> <span>Collection ({collection.length})</span>
              </>
            )}
          </button>

          <button
            className={styles.mobileMenuButton}
            disabled={gettingCombination}
            onClick={(e) => scrollToFormFilter(e)}
            aria-label="Filter"
            title="Filter by Color Range"
          >
            <HiFilter />
          </button>
        </>
      )}
    </div>
  );
};

export default BottomBar;
