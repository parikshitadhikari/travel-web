export const generateRandomNumber = (max = 1000) => {
  let rand = Math.random() * max;
  rand = Math.floor(rand); // 99
  return rand;
};
