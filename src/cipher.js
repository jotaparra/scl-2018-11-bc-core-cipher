window.cipher = {
  encode: (str, offset) => {
    let result = '';
    offset = parseInt(offset);
    if (offset < 0) { offset = offset * -1 }

    for (let i = 0; i < str.length; i++) {
      let strToAscii = str.charCodeAt(i);

      if (strToAscii >= 65 && strToAscii <= 90) {     //condición para minúsculas
        result += String.fromCharCode((strToAscii - 65 + offset) % 26 + 65);
        /* if (offset < 0) {
          result += String.fromCharCode((strToAscii - 65 + (offset * -1)) % 26 + 65)
        }
        else { result += String.fromCharCode((strToAscii - 65 + offset) % 26 + 65) }
      } */
      }
      else if (strToAscii >= 97 && strToAscii <= 122) {  //condición para mayúsculas
        result += String.fromCharCode((strToAscii - 97 + offset) % 26 + 97);
      }
      else if (strToAscii >= 48 && strToAscii <= 57) {  //condición para números
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
        if (strToAscii - 97 - offset < 0) {
          result += String.fromCharCode((strToAscii + 234 - 97 - offset) % 26 + 97);
        }
        else {
          result += String.fromCharCode((strToAscii - 97 - offset) % 26 + 97);
        }
      }
      else if (strToAscii >= 48 && strToAscii <= 57) {
        result += String.fromCharCode((strToAscii - 48 - offset) % 10 + 48);
      }
      else if (strToAscii === 241) {  //condición para ñ
        result += String.fromCharCode((strToAscii - 241 - offset) + 241);
      }
      else {
        result += String.fromCharCode(strToAscii);
      }
    }
    return result;
  }
}





