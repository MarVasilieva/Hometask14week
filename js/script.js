let photo = document.querySelectorAll('img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let i = 0;
prev.onclick = function(){
    photo[i].style.display = 'none';
    i--;
    if (i < 0){
     i = photo.length - 1;
    }
    photo[i].style.display = 'block'

}
next.onclick = function(){
    photo[i].style.display = 'none';
    i++;
    if (i >= photo.length){
     i = 0
    }
    photo[i].style.display = 'block'

}