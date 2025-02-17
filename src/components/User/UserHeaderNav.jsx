import { use, useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Hooks/UserContext";
import feedPhotos from "../../assets/feed.svg";
import exit from "../../assets/exit.svg";
import status from "../../assets/status.svg";
import add from "../../assets/add.svg";
import styles from "./UserHeaderNav.module.css";
import { UseMedia } from "../../Hooks/UseMedia";

export const UserHeaderNav = () => {
  const mobile = UseMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

   const pathname = useLocation();

   useEffect(() => {
    setMobileMenu(false)
   }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={feedPhotos} alt="feed" />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/status">
          <img src={status} alt="status" />
          {mobile && "Status"}
        </NavLink>
        <NavLink to="/conta/post">
          <img src={add} alt="adicionar" />
          {mobile && "Adicionar"}
        </NavLink>
        <button onClick={userLogout}>
          <img src={exit} alt="exit" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};
