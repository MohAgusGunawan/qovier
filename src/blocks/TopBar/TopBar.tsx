import React, { SetStateAction } from 'react';
import { HiFilter } from 'react-icons/hi';
import { BsFolderFill } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';

import { useAppSelector } from '@/src/redux/hooks';

import SelectCover from '@/src/components/SelectCover/SelectCover';
import Padlock from '@/src/components/Padlock/Padlock';

import styles from './TopBar.module.css';

interface Props {
  coverPreview: string[];
  handleCoverChange: (number: number) => void;
  scrollToFormFilter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setIsOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
}

const TopBar = ({
  coverPreview,
  handleCoverChange,
  scrollToFormFilter,
  setIsOpenDrawer,
}: Props) => {
  const { loading: gettingCombination } = useAppSelector(
    (state) => state.combination
  );
  const { value: cover } = useAppSelector((state) => state.cover);
  const { value: collection, loading: gettingCollection } = useAppSelector(
    (state) => state.collection
  );
  const { value: conserved } = useAppSelector((state) => state.conserved);

  return (
    <div className={styles.bar}>
      <div className={`wrapper ${styles.topBar}`}>
        <SelectCover
          value={cover}
          onChange={handleCoverChange}
          list={coverPreview}
          name="Change Preview"
          disabled={gettingCombination}
        />
        <div className={styles.menuWrapper}>
          {gettingCollection ? (
            <button className={styles.menuButton} disabled={gettingCollection}>
              <TbLoader2 className="rotateAnimation" />
              <span>Loading ...</span>
            </button>
          ) : (
            <>
              <Padlock num={conserved.length} />

              <button
                className={styles.menuButton}
                disabled={gettingCombination}
                onClick={(e) => scrollToFormFilter(e)}
                title="Filter by Color Range"
              >
                <HiFilter />
                <span>Filter</span>
              </button>

              <button
                onClick={() => setIsOpenDrawer(true)}
                className={styles.menuButton}
                disabled={gettingCollection}
                title="My Color Pair Collection"
              >
                <BsFolderFill />
                <span>Collection ({collection.length})</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
