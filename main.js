let btnel =document.querySelector(".generate")
let serialel =document.querySelector(".serial");

btnel.onclick=function(){
    let characters="123456789qwertyuiopasdfghjklzxcvbnm!@#$%^&*";
    let charscount=10;
    let randomserial="";
    for(let i = 0 ; i < charscount ; i++){
        randomserial += characters[Math.floor(Math.random() * characters.length)]
    }
    serialel.innerHTML = randomserial

}