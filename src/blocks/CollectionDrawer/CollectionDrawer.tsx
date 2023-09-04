import React, { Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';

import CollectionItem from '@/src/components/CollectionItem/CollectionItem';

import styles from './CollectionDrawer.module.css';

interface Props {
  isOpenDrawer: boolean;
  setIsOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
}

const CollectionDrawer = ({ isOpenDrawer, setIsOpenDrawer }: Props) => {
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
              <h2>
                <span className={styles.panelTitle}>My Collection</span> - (4)
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
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default CollectionDrawer;
