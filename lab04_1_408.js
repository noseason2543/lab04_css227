const c = document.querySelector('.beu');
c.addEventListener('click',hide);
var invis = false;
function hide(){
    var a1 = document.querySelector('.beu');
    var a2 = document.getElementById('c');
    if(invis){
        a1.innerText = '⊳ hide detail';
        a2.classList.add('hidden');
        invis = false;
    }else{
        a1.innerText = '∇ show detail';
        a2.classList.remove('hidden');
        invis = true;
    }
}