import React, { useState } from 'react';
import {runCipher} from "../helpers/cipher";
import "./Form.scss";
import {CipherText} from "./CipherText";

export const Form = () => {
  const [userInput, setUserInput] = useState('')
  const [cipherText, setCipherText] = useState('')

  const handleChange = event => {
    const {value} = event.target;
    setUserInput(value);
    setCipherText(runCipher(value, 5)) // Add option for user to set their own key
  };

  return (
    <div>
      <input
        className='input'
        placeholder='Type something'
        onChange={handleChange}
        value={userInput.value}
      />
      <CipherText cipherText={cipherText} />
    </div>
  )
}