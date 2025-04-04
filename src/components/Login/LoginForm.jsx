// import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useForm } from "../../Hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../Hooks/UserContext";
import { Error } from "../Help/Error";
import styles from "./LoginForm.module.css";
// import stylesbtn from "../Forms/Button.module.css";




export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, erro, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="anime-left">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={erro} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre no site.</p>
        <Link  className={styles.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
