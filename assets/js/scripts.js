const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let generatePasswordBtn = document.getElementById('generate-passwords')
let passwordOneEl = document.getElementById('password-one')
let passwordTwoEl = document.getElementById('password-two')
let count = 0

generatePasswordBtn.addEventListener("click", function passwordFunction() {
  for (i=0; i < 17; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length) + 1 ;
    console.log(characters[randomNumber])
  passwordOneEl.textContent = "lorem"
}
  passwordTwoEl.textContent = "ipsum"
})
//generatePasswordBtn.addEventListener('click', passwordFunction())