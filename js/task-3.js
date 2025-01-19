const inputUserName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

function changeName() {
    let nameValue = inputUserName.value.trim();
    if (nameValue === '') {
       outputName.textContent='Anonymous'
    } else {
        outputName.textContent = nameValue;
   }
}
inputUserName.addEventListener('input', changeName)