import { ReactNode } from "react";
import styles from "./FooterLink.module.scss";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a href={href} className={styles.a}>
      {children}
    </a>
  );
};

export default FooterLink;
