// import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useForm } from "../../Hooks/useForm";



export const LoginForm = () => {
const username = useForm();
const password = useForm();

console.log(password.validate()); 

  function handleSubmit(e) {
    e.prevetDefault();
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
       <Button >Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
