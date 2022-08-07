const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOne = document.getElementById("passTextOne")
let passTwo = document.getElementById("passTextTwo")
let passLength = 15
let pass = "";
function generate(){
    let pwOne = passGen();
    passOne.textContent = ""
    passOne.textContent += pwOne
    pass = ""
    let pwTwo = passGen();
    passTwo.textContent = ""
    passTwo.textContent += pwTwo
    pass = ""
}
function passGen(){
    for(let i = 0; i < passLength; i++){
        pass += characters[Math.floor(Math.random()*characters.length)]
    }
    return pass;
}


