function operate(num1, num2, operator)
{
    let sum;
    if(operator === '+')
    {
        sum = num1 + operator + num2 + '=' + (num1 + num2);
    }
    else if(operator === '-')
    {
        sum = num1 + operator + num2 + '=' + (num1 - num2);
    }
    else if(operator === '*'){
        sum = num1 + operator + num2 + '=' + (num1 * num2);
    }
    else if(operator === '/')
    {
        sum = num1 + operator + num2 + '=' + (num1 / num2);
    }
    else
    {
        return 'Undefined Operator';
    }
    return sum;

}

const numButtons = document.querySelectorAll('button');

numButtons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
function buttonClick(e)
{
    console.log(e.target.innerText);
}

