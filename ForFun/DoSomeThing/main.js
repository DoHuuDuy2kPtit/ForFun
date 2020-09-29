let ball = document.getElementById('ball');

let valueTop = ball.style.top;

let valueTopNum = Number(valueTop.slice(0,valueTop.length-2));

ball.addEventListener('click',()=>{
    valueTopNum -= 10;
    ball.style.top = `${valueTopNum}px`;
    while(valueTopNum != 350){
        window.setTimeout(()=>{
                valueTopNum += 5;
                ball.style.top = `${valueTopNum}px`;
        },0.5);
    }
});

