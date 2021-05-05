# Caesar Cipher - React

A simple Caesar Cipher React app, styled with Sass. 

> In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

The user enters a number, which represents the key, or shift number. The user is then prompted to enter some plaintext, which will be encrypted with the Caesar Cipher and printed out to the page. 

![https://github.com/sandypockets/caesar-cipher-react/blob/main/docs/caesar-cipher-demo.gif?raw=true](https://github.com/sandypockets/caesar-cipher-react/blob/main/docs/caesar-cipher-demo.gif?raw=true)

Using the `words-to-numbers` package, the app is able to accept the input of words for the shift key instead of numbers. For example, the user can specify a shift key of `5`, or they can also write `five`.

## Getting Started

1. Clone or fork this repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` and navigate to [`localhost:3000`](http://localhost:3000) to view the app.

## Dependencies

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-even
- react
- react-dom
- react-scripts
- sass
- web-vitals 
- words-to-numbers

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find helpful information about working with bootstrapped React apps in the [template readme](https://github.com/sandypockets/react-template#readme).