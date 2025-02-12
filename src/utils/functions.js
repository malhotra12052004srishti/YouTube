export const getValidNum = (a) => {
  if (a > Math.pow(10, 9)) {
    return Math.floor(a / Math.pow(10, 9)) + "B";
  } else if (a > Math.pow(10, 6)) {
    return Math.floor(a / Math.pow(10, 6)) + "M";
  } else if (a > Math.pow(10, 3)) {
    return Math.floor(a / Math.pow(10, 3)) + "K";
  }
  return Math.floor(a);
};
