const mainElem = document.querySelector(".main");
const passwordEl = document.createElement("input");
const color = document.createElement("button");
color.classList.toggle("colorChange");
color.innerHTML = 'Нажмите для смены заднего фона'
passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", "Сгенерировать пароль");
passwordEl.addEventListener("keypress", resetInput);
function resetInput(e) {
  e.preventDefault();
}
const copyButton = document.createElement("button");
copyButton.classList.add("password-btn");
copyButton.innerText = "Скопировать";
copyButton.addEventListener("click", CopyPassword);

function CopyPassword(e) {
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(passwordEl.value);
}

const generateButton = document.createElement("button");
generateButton.classList.add("generate-password");
generateButton.innerHTML = "Сгенерировать";
generateButton.addEventListener("click", generatePassword);
generateButton.addEventListener("click", () => {
  let password = generatePassword(12);
  passwordEl.value = password;
});
function generatePassword(passwordLength) {
  const Chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZzyxwvutsrqponmlkjIhgfedcba!@#$%^&*()+_";
  let randomString = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * Chars.length);
    randomString += Chars[randomNumber];
  }
  return randomString;
}
mainElem.appendChild(passwordEl);
mainElem.appendChild(copyButton);
mainElem.appendChild(generateButton);
mainElem.appendChild(color)
color.addEventListener('click', generationBackgroundColors)
color.addEventListener('click', () => {
	let hexColor = generationBackgroundColors();
	document.body.style.backgroundColor = hexColor;
})
function generationBackgroundColors() {
	let chars = '0123456789ABCDEF'
let hex = '#';
for(let i = 0; i < 6; i++){
	hex += chars[Math.floor(Math.random() * 16)];

}
return hex
}