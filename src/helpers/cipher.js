const alphabet = {
  1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g',
  8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n',
  15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u',
  22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'
}

const getKeyByValue = (obj, val) => {
  return Object.keys(obj).find(key => obj[key] === val)
}

export const runCipher = (input, key) => {
  const cipherArr = [];
  const lettersArr = input.toLowerCase().split('');
  for (const char of lettersArr) {
    if (char === ' ') {
      cipherArr.push(char)
    } else {
      const index = getKeyByValue(alphabet, char);
      let cipherKey = Number(index) + Number(key);
      if (cipherKey > 26) {
        cipherKey -= 26;
      }
      cipherArr.push(alphabet[cipherKey]);
    }
  }
  return cipherArr.join('')
}