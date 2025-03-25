import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.div}>
      <Logo />
      <NavMenu />
    </div>
  );
};

export default Navbar;
