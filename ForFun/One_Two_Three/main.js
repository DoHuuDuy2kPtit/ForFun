let arrResult = ["Keo","Bua","Bao"];

let keo = document.querySelector('input[value="keo"]');

let bua = document.querySelector('input[value="bua"]');

let bao = document.querySelector('input[value="bao"]');

let result = document.querySelector('.result');

let playerChoose;


keo.addEventListener('click',()=>{
    playerChoose = keo.value;
    let comChoose = Math.floor(Math.random()*3);
    if(arrResult[comChoose] == "Keo") result.innerHTML = 'DRAW :|';
    else if(arrResult[comChoose] == "Bua") result.innerHTML = 'LOSE :(';
    else result.innerHTML = 'WIN :)';
});

bua.addEventListener('click',()=>{
    playerChoose = bua.value;
    let comChoose = Math.floor(Math.random()*3);
    if(arrResult[comChoose] == "Bua") result.innerHTML = 'DRAW :|';
    else if(arrResult[comChoose] == "Bao") result.innerHTML = 'LOSE :(';
    else result.innerHTML = 'WIN :)';
});

bao.addEventListener('click',()=>{
    playerChoose = bao.value;
    let comChoose = Math.floor(Math.random()*3);
    if(arrResult[comChoose] == "Bao") result.innerHTML = 'DRAW :|';
    else if(arrResult[comChoose] == "Keo") result.innerHTML = 'LOSE :(';
    else result.innerHTML = 'WIN :)';
})


