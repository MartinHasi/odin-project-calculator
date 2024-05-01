const btn = document.querySelectorAll('button');
const display = document.querySelector('#display');

display.value = 0;
let numValue1 = '';
let numValue2 = '';
let operator = '';

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        
        if((button.className === 'number' || button.className === 'decimal') && operator === '')
        {
            numValue1 += e.target.value;
            display.value = numValue1;
            //debugConsole('numValue1', numValue1);
        }
        else if(button.className === 'operator' && operator === '')
        {
            operator += e.target.value;
            display.value = '';
            display.value = operator;
            //debugConsole('operator', operator);
        }
        else if((button.className === 'number' || button.className === 'decimal') && operator !== '')
        {
            numValue2 += e.target.value;
            display.value = ''; 
            display.value = numValue2;
            //debugConsole('numValue2', numValue2);
        }
        else if (button.className === 'equals' && numValue1 !=='' &&(numValue2 !== '' && numValue2 !== 0) && operator !== '')
        {
            const result = operate(numValue1, numValue2, operator);
            //debugConsole('result', result);
            display.value = result.toFixed(2);
            numValue1 = '';
            numValue2 = '';
            //debugConsole('numValue1', numValue1);
            //debugConsole('numValue2', numValue2);
        }

        if(button.className === 'operator' && button.value === 'C')
        {
            display.value = 0;
            numValue1 = '';
            numValue2 = '';
            operator = '';
            //debugConsole('numValue1', numValue1);
            //debugConsole('numValue2', numValue2);
            //debugConsole('operator', operator);

        }
    });
});


function debugConsole(valueName,value)
{
    console.log(`${valueName} : ${value}`);
}

function operate(num1, num2, operator)
{
    if(num1.includes('.') || num2.includes('.'))
    {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    }
    else
    {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
 
    }
    if(operator === '+')
    {
        return num1 + num2;
    }
    else if(operator === '-')
    {
        return num1 - num2;
    } 
    else if(operator === 'x')
    {
        return num1 * num2;
    } 
    else if(operator === '/')
    {
        return num1 / num2;
    } 
}