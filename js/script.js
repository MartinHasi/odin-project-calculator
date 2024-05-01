const btn = document.querySelectorAll('button');
const display = document.querySelector('#display');

display.value = 0;
let numValue1 = '';
let numValue2 = '';
let operator = '';

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        if(button.className === 'number'  && operator === '')
        {
            numValue1 += e.target.value;
            display.value = numValue1;
            debugConsole('numValue1', numValue1);
        }
        else if(button.className === 'operator' && operator === '')
        {
            operator += e.target.value;
            display.value = '';
            display.value = operator;
            debugConsole('operator', operator);
        }
        else if(button.className === 'number'  && operator !== '')
        {
            numValue2 += e.target.value;
            display.value = ''; 
            display.value = numValue2;
            debugConsole('numValue2', numValue2);
        }
    });
});


function debugConsole(valueName,value)
{
    console.log(`${valueName} : ${value}`);
}