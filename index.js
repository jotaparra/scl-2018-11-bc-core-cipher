window.onload = () => {
  const btncipher = document.getElementById('btn1');

  btncipher.addEventListener('click', () => {
  let str = document.getElementById('mensaje').value;
  let offset = document.getElementById('numberOffset').value;
  let result = window.cipher.encode(str, offset);
  document.getElementById('nuevoMensaje').innerHTML = result;
  }); 

 const decipherBtn = document.getElementById('btn2');

  decipherBtn.addEventListener('click', () => {
  let str = document.getElementById('mensaje').value;
  let offset = document.getElementById('numberOffset').value;
  let result = window.cipher.decode(str, offset);
  document.getElementById('nuevoMensaje').innerHTML = result;
  }); 

  const cleanBtn = document.getElementById('btn3')    //o podemos eliminar esta linea y colocar inmediatamente  btn3.addEventListener('click', () => {
  
  cleanBtn.addEventListener('click', () => {
    document.getElementById('mensaje').value = '';
    document.getElementById('nuevoMensaje').value = '';
    document.getElementById('numberOffset').value = '';
    });
}
