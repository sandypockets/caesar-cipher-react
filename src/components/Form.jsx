import React, { useState } from 'react';
import {runCipher} from "../helpers/cipher";
import {CipherText} from "./CipherText";
import {checkIfNum} from "../helpers/validateShiftKey";
import "./Form.scss";

export const Form = () => {
  const [userInput, setUserInput] = useState('')
  const [cipherText, setCipherText] = useState('')
  const [form, setForm] = useState(false)
  const [cipherKey, setCipherKey] = useState('5')

  const handleChange = event => {
    const { value } = event.target;
    setUserInput(value);
    setCipherText(runCipher(value, cipherKey))
  };

  const getCipherKey = event => {
    const { value } = event.target;
    setUserInput(value)
    setCipherKey(checkIfNum(value))
    setTimeout(() => {
      setForm(true)
    }, 2000)
  }

  return (
    <div>
      {form && <input
        className='input'
        placeholder='Enter your plaintext'
        onChange={handleChange}
        value={userInput.value}
      />}
      {!form && <input
        className='input'
        placeholder='Enter your cipher key'
        onChange={getCipherKey}
        value={userInput.value}
      />}
      <CipherText cipherText={cipherText} />
    </div>
  )
}