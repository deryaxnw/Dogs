

import { useState } from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

        messege: 'Preencha um email válido'
    },
        
} 


export const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");



    function validate(value){
        if(type === undefined) return true;
        if(value.length === 0) {
            setError('preencha um valor')
            return false;
        } else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].messege);
            return false
        } else {
            setError('')
            return true
        }
    }


  function onChange({target}){
    validate(target.value)
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
