export const capitalizeFirstletter = (str) => {
  var inputString = "";

  if (str != null || str != undefined) {
    inputString = str;
    var modifiedString =
      `${inputString.charAt(0).toUpperCase()}` + inputString.slice(1);
    str = modifiedString;
  }

  return str;
};
