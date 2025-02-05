import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import dogHeader from "../../assets/dogHeader.svg";
import { UserContext } from "../../Hooks/UserContext";
import { useContext } from "react";


export const Header = () => {
  const usuario = useContext(UserContext)

  console.log(usuario);
  

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={dogHeader} alt="dog" />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
