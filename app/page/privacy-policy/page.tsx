import Link from 'next/link';
import type { Metadata } from 'next';
import { TbCornerUpLeft } from 'react-icons/tb';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy - Qovier',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.privacyPolicy}>
          <h1 className={styles.headingOne}>Privacy Policy</h1>
          <time className={styles.lastModified} dateTime="2023-09-29">
            Last Modified: 29th September 2023
          </time>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Introduction</h2>
            <p className={styles.sectionText}>
              <b>Qovier (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)</b>{' '}
              highly value the privacy of our users and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect and use the data you provide when accessing our
              website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>
              Data Collection and Google Analytics
            </h2>
            <p className={styles.sectionText}>
              We use the Google Analytics service to gather anonymous
              information about visitors to our website. Google Analytics
              utilizes cookies to track user behavior, such as visit times,
              pages visited, geographical locations, and more. The information
              collected by Google Analytics is anonymous data and cannot be used
              to identify individuals.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Purpose of Data Usage</h2>
            <p className={styles.sectionText}>
              The information we collect through Google Analytics is used to
              understand user behavior, measure the performance of our website,
              and enhance the user experience. This data is used in an aggregate
              form and is not linked to individual personal information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Cookie Management</h2>
            <p className={styles.sectionText}>
              Users have the option to manage cookie preferences through their
              browser settings. You can disable the use of cookies or set alerts
              when cookies are sent. However, please be aware that disabling
              cookies may impact the user experience on our website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>
              Changes to the Privacy Policy
            </h2>
            <p className={styles.sectionText}>
              This Privacy Policy may be updated periodically to reflect changes
              in our privacy practices. Such changes will be communicated
              through updates on this page.
            </p>
          </section>
        </div>
        <div className={styles.linkWrapper}>
          <div className={styles.linkHome}>
            <TbCornerUpLeft />
            <Link href="/">Return to main page</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
