let wynik;
let poziom;
let blockclick;
let interval;
let najlepszy = 0;
const najlepszyPole = document.getElementById('najlepszy');
const liczbaPole = document.getElementById('liczba');
const dzikPole = document.getElementById('dzik');
const wynikPole = document.getElementById('wynik');
const informacjaPole = document.getElementById('informacja');

function generateliczba() {
    return Math.floor(Math.random() * 100) + 1;
}

function updateliczba() {
    const liczba = generateliczba();
    liczbaPole.textContent = liczba;
}

function checkliczba(liczba) {
    return liczba % 7 === 0 || liczba.toString().includes('7');
}

function startGame() {
    clearInterval(interval);
    wynik = 0;
    poziom = 1;
    blockclick = false;
    document.querySelector("body").style.backgroundColor = "whitesmoke";
    wynikPole.textContent = `Wynik: ${wynik}`;
    updateliczba();
    interval = setInterval(() => {
        if (checkliczba(parseInt(liczbaPole.textContent)) && blockclick == false) {
            gameOver();
        }
        else {
            blockclick = false;
            updateliczba();
            document.querySelector("body").style.backgroundColor = "whitesmoke";
            if (wynik > 5) poziom = 2;
            if (wynik > 10) poziom = 3;
        }
    }, 2000 / poziom);
}

dzikPole.addEventListener('click', () => {
    const liczba = parseInt(liczbaPole.textContent);
    if (blockclick == false){
        if (checkliczba(liczba)) {
            wynik++;
            document.querySelector("body").style.backgroundColor = "green";
            wynikPole.textContent = `Wynik: ${wynik}`;
            blockclick = true;
        }
        else {
            gameOver();
        }
    }
});

function gameOver() {
    clearInterval(interval);
    blockclick = true;
    informacjaPole.textContent = 'Przegrałeś!';
    document.querySelector("body").style.backgroundColor = "red";
    if (najlepszy < wynik){
        najlepszy = wynik;
        najlepszyPole.textContent = `Najlepszy wynik: ${najlepszy}`;
    }
}

startGame();