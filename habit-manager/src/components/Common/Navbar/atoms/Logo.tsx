import logo from "../../../../assets/computer.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return <img className={styles.img} src={logo} alt="logo" />;
};

export default Logo;
