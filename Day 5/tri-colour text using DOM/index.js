let b = document.body
// b.innerHTML= '<div>Hellloo</div>';
b.style.background = 'white';

setTimeout(() => {
    b.children[0].style.color = 'red';
}, 1000);
setTimeout(() => {
    b.children[0].innerHTML = "RED"
}, 2000);
setTimeout(() => {
    b.children[1].style.color = 'yellow';
}, 3000);
setTimeout(() => {
    b.children[1].innerHTML = "YELLOW"
}, 4000);
setTimeout(() => {
    b.children[2].style.color = 'green';
}, 5000);
setTimeout(() => {
    b.children[2].innerHTML = "GREEN"
}, 6000);

