import styles from "./FooterText.module.scss";

interface FooterTextProps {
  text: string;
}

const FooterText = ({ text }: FooterTextProps) => {
  return <p className={styles.p}>{text}</p>;
};

export default FooterText;
