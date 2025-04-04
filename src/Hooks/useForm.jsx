

import { useState } from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

        messege: 'Preencha um email válido'
    },
      
    password: {
      regex: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      messege: 'A senha precisa conter ao menos 6 digitos, 1 número e um caracter "especial"'
    },

    number: {
      regex: /^\d+$/,
      messege: 'Utilize apenas números.'
    }


} 


export const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);



    function validate(value){
        if(type === false) return true;
        if(value.length === 0) {
            setError('preencha um valor')
            return false;
        } else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].messege);
            return false
        } else {
            setError(null)
            return true
        }
    }


  function onChange({target}){
   if(error) validate(target.value)
    setValue(target.value)
  }


  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
