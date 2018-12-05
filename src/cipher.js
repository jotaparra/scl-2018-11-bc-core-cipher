window.cipher = {
  encode: (offset, str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let strToAscii = str.charCodeAt(i);

      if (strToAscii >= 65 && strToAscii <= 90) {
        result += String.fromCharCode((strToAscii - 65 + parseInt(offset)) % 26 + 65);
      }
      else if (strToAscii >= 97 && strToAscii <= 122) {
        result += String.fromCharCode((strToAscii - 97 + parseInt(offset)) % 26 + 97);
      }
      else if (strToAscii >= 48 && strToAscii <= 57) {
        result += String.fromCharCode((strToAscii - 48 + parseInt(offset)) % 10 + 48);
      }
      else {
        result += String.fromCharCode(strToAscii);
      }
    }
    return result;
  },

  decode: (offset, str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let strToAscii = str.charCodeAt(i);

      if (strToAscii >= 65 && strToAscii <= 90) {
        result += String.fromCharCode((strToAscii - 65 - parseInt(offset)) % 26 + 65);
      }
      else if (strToAscii >= 97 && strToAscii <= 122) {
        result += String.fromCharCode((strToAscii - 97 - parseInt(offset)) % 26 + 97);
      }
      else if (strToAscii >= 48 && strToAscii <= 57) {
        result += String.fromCharCode((strToAscii - 48 - parseInt(offset)) % 10 + 48);
      }
      else {
        result += String.fromCharCode(strToAscii);
      }
    }
    return result;
  }
}