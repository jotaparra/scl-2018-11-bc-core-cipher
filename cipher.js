window.cipher = {
  encode: (str, offset) => {
    let result = '';
    offset = parseInt(offset);

    for (let i = 0; i < str.length; i++) {
      let strToAscii = str.charCodeAt(i);

      if (strToAscii >= 65 && strToAscii <= 90) {
        result += String.fromCharCode((strToAscii - 65 + offset) % 26 + 65);
      }
      else if (strToAscii >= 97 && strToAscii <= 122) {
        result += String.fromCharCode((strToAscii - 97 + offset) % 26 + 97);
      }
      else if (strToAscii >= 48 && strToAscii <= 57) {
        result += String.fromCharCode((strToAscii - 48 + offset) % 10 + 48);
      }
      else {
        result += String.fromCharCode(strToAscii);
      }
    }
    return result;
  },

  decode: (str, offset) => {
    let result = '';
    offset = parseInt(offset);
    for (let i = 0; i < str.length; i++) {
      let strToAscii = str.charCodeAt(i);
      if (strToAscii >= 65 && strToAscii <= 90) {
        if (strToAscii - 65 - offset < 0) {
          result += String.fromCharCode((strToAscii + 234 - 65 - offset) % 26 + 65);
        }
        else {
          result += String.fromCharCode((strToAscii - 65 - offset) % 26 + 65);
        }
      }
      else if (strToAscii >= 97 && strToAscii <= 122) {
        result += String.fromCharCode((strToAscii - 97 - offset) % 26 + 97);
      }
      else if (strToAscii >= 48 && strToAscii <= 57) {
        result += String.fromCharCode((strToAscii - 48 - offset) % 10 + 48);
      }
      else {
        result += String.fromCharCode(strToAscii);
      }
    }
    return result;
  }
}