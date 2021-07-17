var numbers = [];

for(var i = 0; i < 1; i++) {
    let firstNumber = prompt ('Give me a number.')
    let secondNumber = prompt ('Give me another number.');
    let thirdNumber = prompt ('Give a number again.')
    let sum = +firstNumber + +secondNumber + +thirdNumber;
   document.getElementById("num").innerHTML = ("The sum of all of your numbers is " + sum);
};

