import Link from 'next/link';

import Logo from '../../public/logo.svg';
import Behance from '../../public/behance.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <a >Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a >Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a >Contáctame</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav >
        <ul className={styles.logoFooter}>
          <li>
            <Behance />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Linkedin />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
