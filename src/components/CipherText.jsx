import React from 'react'
import './CipherText.scss'

export const CipherText = (props) => {

  return (
    <div>
      <h1 className='cipher-text'>{props.cipherText}</h1>
    </div>
  )
}