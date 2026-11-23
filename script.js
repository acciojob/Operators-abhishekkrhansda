
const operator = document.querySelector('#operator');
const calculate = document.querySelector('#calculate');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#result');

calculate.addEventListener("click", () => {

    let a = Number(num1.value);
    let b = Number(num2.value);

    let ans;

    switch (operator.value) {

        case '+':
            ans = a + b;
            break;

        case '-':
            ans = a - b;
            break;

        case '*':
            ans = a * b;
            break;

        case '/':
            ans = b !== 0 ? a / b : 'Divisor cannot be zero';
            break;

        default:
            ans = 'Invalid operator';
            break;
    }

    result.textContent = ans;
});

const changeText = document.getElementById('change_text');

changeText.addEventListener('click', () => {

    const divisions = document.querySelectorAll('.division');

    const newTexts = [
        'Bye',
        'Good Bye',
        'To',
        'Your',
        'Class'
    ];

    divisions.forEach((division, index) => {
        division.textContent = newTexts[index];
    });

});



