var c = document.getElementById('mytable').addEventListener('click',switch_color);
var j = true;
function switch_color(){
    var b1 = document.getElementById('i1');
    var b2 = document.getElementById('i2');
    var b3 = document.getElementById('i3');
    var b4 = document.getElementById('i4');
    if(j){
        b1.classList.remove('background-black');
        b1.classList.add('background-white');
        b2.classList.remove('background-white');
        b2.classList.add('background-black');
        b3.classList.remove('background-white');
        b3.classList.add('background-black');
        b4.classList.remove('background-black');
        b4.classList.add('background-white');
        j = false;
    }else{
        b1.classList.remove('background-white');
        b1.classList.add('background-black');
        b2.classList.remove('background-black');
        b2.classList.add('background-white');
        b3.classList.remove('background-black');
        b3.classList.add('background-white');
        b4.classList.remove('background-white');
        b4.classList.add('background-black');
        j = true;
    }

}
