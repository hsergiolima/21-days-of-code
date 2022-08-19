function start() {
    var buttonClickMe = document.querySelector('#click-me');
    buttonClickMe.addEventListener('click', clickButton);
}

function clickButton() {
    document.getElementById('hello-world').innerHTML = 'Hello, Galera Marmitech!';
    document.getElementById('hello-world').style.fontSize = '35px';
    document.getElementById('hello-world').style.fontFamily = 'Monospace';
    document.getElementById('hello-world').style.textAlign = 'center';
    document.getElementById('hello-world').style.color= 'white';

    document.getElementById('hello-box').style.alignContent = 'center';
    document.getElementById('hello-box').style.backgroundColor = 'purple';

    document.getElementById('logo-box').style.display = 'flex';
    document.getElementById('logo-box').style.padding = '20px';
    document.getElementById('logo-box').style.alignContent = 'center';
//    document.getElementById('logo-box').style.width = '1000px;'
    document.getElementById('logo-box').style.height = '200px;'

    console.log('#21 dias de código!')
}

start();