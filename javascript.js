console.log("connected");

const celcius = document.querySelector('#celcius');
console.log(celcius)

const output = document.querySelector('#output');
console.log(output)

const convertbtn = document.querySelector('#sub');
const swapbtn = document.querySelector('#swapbtn');
const resetbtn = document.querySelector('#resetbtn');
const celText = document.querySelector('#celText');
const farText = document.querySelector('#farText');
const celp = document.querySelector('#celp');
const farp = document.querySelector('#farp');

var flag = 0;

function converting() {
    if(flag == 0) {
    var far = (parseFloat(celcius.value) *9)/5 + 32;
    output.value = parseFloat(far.toFixed(2));
    console.log("works" + far);
    }
    else if(flag == 1) {
        var cel = (parseFloat(celcius.value) - 32) * (5/9);
        output.value = cel;
        console.log("works" + cel);
    }
}

convertbtn.addEventListener('click', converting);

function swap() {
    if (flag == 0) {
        celText.innerText = "Temperature in farenheit:";
        farText.innerText = "Temperature in degree celcius:"
        celp.innerText = "°F";
        farp.innerText = "°C";
        flag = 1;
    }
    else {
        farText.innerText = "Temperature in farenheit:";
        celText.innerText = "Temperature in degree celcius:"
        celp.innerText = "°C";
        farp.innerText = "°F";
        flag = 0;
    }
    console.log("done");
}

swapbtn.addEventListener('click', swap);