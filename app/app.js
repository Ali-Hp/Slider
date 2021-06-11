let img = document.querySelector('.boxImage');
let myBox = img.getElementsByTagName('section');
let i = 0;

function Next() {
    myBox[i].classList.remove('active');
    i = (i + 1) % myBox.length;
    myBox[i].classList.add('active')
}

function back() {
    myBox[i].classList.remove('active');
    i = (i - 1 + myBox.length) % myBox.length;
    myBox[i].classList.add('active')
}
setInterval(Next, 3000);

const loading = document.getElementById('loading');
window.addEventListener('load', () => {
    loading.classList.add('hidden')
});