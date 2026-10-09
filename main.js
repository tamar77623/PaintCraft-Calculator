let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3');
let span1 = document.getElementById('span1')
let btn2 = document.getElementById('btn2');
function h3text(){
    setTimeout(() => {
    h3.innerText = '';
    }, 1800);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = `please enter ${inp1.placeholder}`;
        h3text();
        return;
    }
    if(inp2.value === ""){
        h3.innerText = `please enter ${inp2.placeholder}`;
        h3text();
        return;
    }
    if(inp3.value === ""){
        h3.innerText = `please enter ${inp3.placeholder}`;
        h3text();
        return;
    }
    account();
    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
}
function account(){
    let inp1number = Number(inp1.value);
    let inp2number = Number(inp2.value);
    let inp3number = Number(inp3.value);
    let Area = 2 *(inp1number + inp2number) * inp3number;
    console.log(Area);
    let Trat = Area * 2 /10;
    console.log(Trat);
    let Numbercans = Trat / 3.75;
    console.log(Math.ceil(Numbercans))
    span1.innerText = `You need ${Math.ceil(Numbercans)} cans`;
    btn2.style.display = 'block'
}
btn2.onclick = function(){
    location.reload();
}