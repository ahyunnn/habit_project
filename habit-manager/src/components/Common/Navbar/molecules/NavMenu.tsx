import NavItem from "../atoms/NavItem";
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  const menus = [
    { label: "Home", href: "/" },
    // { label: "About", href: "/" },
    { label: "Templates", href: "/templates" },
    { label: "My page", href: "/mypage" },
  ];

  return (
    <ul className={styles.ul}>
      {menus.map((menu, idx) => (
        <NavItem label={menu.label} href={menu.href} key={idx} />
      ))}
    </ul>
  );
};

export default NavMenu;
