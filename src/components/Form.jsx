import React, { useState } from 'react';
import {runCipher} from "../helpers/cipher";
import "./Form.scss";

export const Form = (props) => {
  const [userInput, setUserInput] = useState('')
  const [hintText, setHintText] = useState('')

  const handleChange = event => {
    const {value} = event.target;
    setUserInput(value);
    setHintText(value.length > 2 ? `Press enter to encrypt ${value} with the Caesar Cipher` : '')
  };

  const handleKeyPress = event => {
    const {value} = event.target;
    console.log(value)
    if (value.length > 2 && event.key === 'Enter') {
      runCipher(value, 5) // Add option for user to set their own key
      console.log(event.key, value)
    }
  }

  return (
    <div>
      <input
        className='input'
        placeholder='Type something'
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={userInput.value}
      />
    </div>
  )
}