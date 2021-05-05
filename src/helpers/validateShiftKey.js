import wordsToNumbers from 'words-to-numbers';

export const checkIfNum = (userInputShiftKey) => {
  if (typeof userInputShiftKey !== 'number') {
    return wordsToNumbers(userInputShiftKey);
  }
  return userInputShiftKey;
}