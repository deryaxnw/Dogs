import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import dogHeader from "../../assets/dogHeader.svg";
import { UserContext } from "../../Hooks/UserContext";
import { useContext } from "react";


export const Header = () => {
  const {data, userLogout} = useContext(UserContext)


  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <img src={dogHeader} alt="dog" />
        </Link>
        {data ? (<Link className={styles.login} to="/conta">
        
       {data.nome}
       {/* <button onClick={userLogout}>Sair</button> */}
      </Link>) : ( <Link className={styles.login} to="/login">
        
        Login / Criar
      </Link>)}
      </nav>
    </header>
  );
};
