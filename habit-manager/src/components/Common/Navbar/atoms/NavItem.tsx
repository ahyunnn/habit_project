import { Link } from "react-router-dom";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <li className={styles.li}>
      <Link className={styles.link} to={href}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
