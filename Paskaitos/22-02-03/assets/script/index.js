function randomSkaicius(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

let stars = '';
for(let i = 0; i<400; i++){
    stars += '*';
}
document.getElementById('paragraph').innerText = stars;

for (let i = 1; i < 9; i++){
    let stars = ''
    for(let j = 0; j < 50; j++){
        stars += '*';
    }
    document.getElementById(`p${i}`).innerText = stars;
}

//----------------------------------------------------------------------------------------

let number;
let sum_150 = 0;

for (let i = 0; i < 300; i++){
    number = randomSkaicius(0,300);
    span = document.createElement('span')
    span.innerText = number + ' ';
    if (number > 150)
        sum_150++;
    if (number > 275)
        span.classList.add('red');
    document.getElementById('main_answer').appendChild(span);
}
document.getElementById('answer').innerText = 'Didesnių skaičių už 150: ' + sum_150;

//----------------------------------------------------------------------------------------

let result = '';
let result_edit;

for(let i = 1; i<=3000; i++){
    if (!(i%77))
    result += i + ', '
}
result_edit = result.slice(0,-2);
document.getElementById('result').innerText = result_edit;

//-----------------------------------------------------------------------------------------

let square = '';

for(let i = 0; i < 100; i++){
    for(let j = 0; j < 100; j++){
        square += '*';
    }
    square += '<br>';
}

document.getElementById('square').innerHTML = square;

//----------------------------------------------------------------------------------------

let bens_number;
let bens_sum = 0;
let jovitas_number;
let jovitas_sum = 0;
let log = '';

while (bens_sum < 222 && jovitas_sum < 222){
    bens_number = randomSkaicius(10,20);
    jovitas_number = randomSkaicius(5,25);

    if (bens_number == 12 || jovitas_number == 12){}
    else{
        bens_sum += bens_number;
        jovitas_sum += jovitas_number;
        if (bens_number > jovitas_number)
            log += 'Partiją laimėjo: Benas su ' + bens_number + ' taškų.<br>';
        else log += 'Partiją laimėjo: Jovita su ' + jovitas_number + ' taškų.<br>';
    }
}
if (bens_sum > jovitas_sum)
    log += 'Žaidimą laimėjo Benas su ' + bens_sum + ' taškų.<br>'
else log += 'Žaidimą laimėjo Jovita su ' + jovitas_sum + ' taškų.<br>'

document.getElementById('checkers').innerHTML = log;

//-----------------------------------------------------------------------------------------

let out_sum = 0;

for(let i = 0; i < 300; i++){
    let top = randomSkaicius(0,550);
    let left = randomSkaicius(0,550);
    console.log('Top: ' + top + ' Left: ' + left);
    
    let square = document.createElement('div');
    square.style.height = '5px'
    square.style.width = '5px'
    square.style.position = 'absolute'
    square.style.backgroundColor = 'red'
    square.style.border = '1px'
    square.style.borderStyle = 'solid'
    square.style.borderColor = '#333'
    square.style.left = `${left}px`
    square.style.top = `${top}px`

    document.getElementById('canvas').appendChild(square);
    
    if (top > 495 || left > 495) out_sum++;
}

document.getElementById('out_sum').innerText = 'Išėjo už kraštų: ' + out_sum;