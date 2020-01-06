const theme1 = document.querySelector('#theme1');
const theme2 = document.querySelector('#theme2');
const theme3 = document.querySelector('#theme3');
const theme4 = document.querySelector('#theme4');


console.log(theme1);
console.log(theme2);
console.log(theme3);
console.log(theme4);

theme1.addEventListener('click', function () {
    window.location.href = "Basicweb.html"
});
theme2.addEventListener('click', function () {
    window.location.href = "basicanimation.html"
});
theme3.addEventListener('click', function () {
    window.location.href = "basiccontent.html"
});
theme4.addEventListener('click', function () {
    window.location.href = "basicux.html"
});

