var out = document.getElementById('out');
out.addEventListener('click',zz1);
var in1 = document.getElementById('in');
in1.addEventListener('click',zz2);
var but = document.getElementById('reset');
but.addEventListener('click',reset1);
function zz1(){
    document.getElementById('out').classList.remove('colorDefault1');
    document.getElementById('out').classList.add('color1');
}
function zz2(){
    document.getElementById('in').classList.remove('colorDefault2');
    document.getElementById('in').classList.add('color2');
}

function reset1(){
    document.getElementById('out').classList.remove('color1');
    document.getElementById('in').classList.remove('color2');
    document.getElementById('out').classList.add('colorDefault1');
    document.getElementById('in').classList.add('colorDefault2');
}