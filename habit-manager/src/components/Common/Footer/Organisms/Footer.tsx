import FooterText from "../atoms/FooterText";
import FooterLink from "../atoms/FooterLink";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
      </nav>
      <FooterText text="©Ahyun. All rights reserved." />
    </footer>
  );
};

export default Footer;
