import { UserHeaderNav } from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/post":
        setTitle("Poste sua foto");
        break;
      case "/conta/status":
        setTitle("Seus Status");
        break;
        default:
            setTitle('Minha conta')
    }
  }, [location]);

  return (
    <>
      <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <UserHeaderNav />
      </header>
    </>
  );
};
