let userName;

document.getElementById('myButton').onclick = function () {
    userName = document.getElementById('myText').value;
    document.getElementById('title').innerHTML = userName;
};

document.getElementById('purple').onclick = function changeBGColor() {
    document.body.style.backgroundColor = 'purple';
    document.getElementById('purple').style.color = 'white';
}

document.getElementById('blue').onclick = function changeBGColor() {
    document.body.style.backgroundColor = 'blue';
    document.getElementById('blue').style.color = 'white';
}

document.getElementById('pink').onclick = function changeBGColor() {
    document.body.style.backgroundColor = 'pink';
    document.getElementById('pink').style.color = 'white';
}