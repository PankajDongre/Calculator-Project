let screen =document.getElementById('display');
function input(x){
    screen.value = screen.value + x;
}

function all_clr(){
    screen.value = ' ';
}

function Dlt(){
    screen.value = screen.value.slice(0,-1);
}

function equal(){
    screen.value = eval(screen.value);
}

