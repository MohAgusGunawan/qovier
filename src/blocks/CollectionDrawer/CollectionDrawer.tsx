import React, { Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFolderFill } from 'react-icons/bs';

import { useAppSelector } from '@/src/redux/hooks';

import EmptyCollection from '@/src/components/EmptyCollection/EmptyCollection';
import CollectionItem from '@/src/components/CollectionItem/CollectionItem';

import styles from './CollectionDrawer.module.css';

interface Props {
  isOpenDrawer: boolean;
  setIsOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
}

const CollectionDrawer = ({ isOpenDrawer, setIsOpenDrawer }: Props) => {
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
    <Transition appear show={isOpenDrawer} as={Fragment}>
      <Dialog
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        as="div"
        className={styles.drawer}
      >
        <Transition.Child
          as={Fragment}
          enter="at-drawerTransition"
          enterFrom="at-fadeOut"
          enterTo="at-fadeIn"
          leave="at-drawerTransition"
          leaveFrom="at-fadeIn"
          leaveTo="at-fadeOut"
        >
          <div className={styles.drawerBackdrop} aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="at-drawerTransition"
          enterFrom="at-slideToRight"
          enterTo="at-slideFromRight"
          leave="at-drawerTransition"
          leaveFrom="at-slideFromRight"
          leaveTo="at-slideToRight"
        >
          <Dialog.Panel className={styles.drawerPanel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>
                <BsFolderFill />
                <span>Collection ({collection.length})</span>
              </h2>
              <button
                onClick={() => setIsOpenDrawer(false)}
                aria-label="Close Collection Drawer"
                className={styles.panelCloseButton}
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className={styles.panelBody}>
              {collection.length >= 1 ? (
                <div className={styles.boxList}>
                  {collectionSort.map((item, index) => {
                    const currentMonthYear = item.monthYear;
                    const prevMonthYear =
                      index === 0
                        ? 'First'
                        : collectionSort[index - 1].monthYear;

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
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default CollectionDrawer;
