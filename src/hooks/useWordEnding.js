export const useWordEnding = () => {
  const getEnding = (number, wordForms) => {
    const absNumber = Math.abs(number);
    const remainder10 = absNumber % 10;
    const remainder100 = absNumber % 100;

    if (remainder100 >= 11 && remainder100 <= 19) {
      return wordForms[2];
    } else if (remainder10 === 1) {
      return wordForms[0];
    } else if (remainder10 >= 2 && remainder10 <= 4) {
      return wordForms[1];
    } else {
      return wordForms[2];
    }
  };

  return getEnding;
};
