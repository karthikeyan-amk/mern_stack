let b = document.body
// b.innerHTML= '<div>Hellloo</div>';
b.style.background = 'white';
let colour = ['red', 'yellow', 'green', 'grey'];
let i = 0;
setInterval(() => {
    setTimeout(() => {
        b.children[0].style.color = colour[i];
        i = (i+1)%4;
    }, 100);
    setTimeout(() => {
        b.children[1].style.color = colour[i];
        i = (i+1)%4;
    }, 300);
    setTimeout(() => {
        b.children[2].style.color = colour[i];
        i = (i+1)%4;
    }, 900);
}, 1000);

b.getElementsByClassName
b.getElementById

/*
b.
 */
