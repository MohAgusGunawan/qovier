import { useState, useEffect } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

import styles from './CookieConsent.module.css';
import Link from 'next/link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  if (showConsent) {
    return null;
  }

  return (
    <div className={styles.cookieConsent}>
      <div className={styles.wrapper}>
        <span className={styles.text}>
          By continuing, you agree to our use of cookies as outlined in our{' '}
          <Link href="/page/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link>{' '}
          to enhance your experience.
        </span>
        <button
          className={styles.button}
          onClick={() => acceptCookie()}
          title="Accept Cookie"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
