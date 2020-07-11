import React from "react";
import Link from '../link'
import styles from './index.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href="#" title="Coing to 1" type="footer" />
        <Link href="#" title="Coing to 2" type="footer" />
        <Link href="#" title="Coing to 3" type="footer" />
      </div>
      <p className={styles.university}>Software University 2020</p>
    </footer>
  );
};

export default Footer;
