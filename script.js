let buttons = document.querySelectorAll('button:not(.equal):not(.addition):not(.subtract):not(.division):not(.multi)');

let firstOutput = document.querySelector('.firstinput');

let secondOutput = document.querySelector('.secondinput');

let equalBtn = document.querySelector('.equal');

let additionBtn = document.querySelector('.addition');

let subBtn = document.querySelector('.subtract');

let multiBtn = document.querySelector('.multi');

let divBtn = document.querySelector('.division');

let centBtn = document.querySelector('.porcentage');

 

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        if(button.textContent === 'C'){

          secondOutput.textContent = '';

          let firstString = firstOutput.textContent;

          let arr = firstString.split('');

          arr.splice(arr.length-1,1);

          firstOutput.textContent = arr.join('');

          if(firstOutput.textContent == ''){

            firstOutput.textContent = '0'

          }

        }else if (button.textContent === 'AC') {

        firstOutput.textContent = '0';

        secondOutput.textContent = '';

        }else if (firstOutput.textContent === '0') {

          if(button.textContent === '.'){

            firstOutput.textContent += button.textContent;

          }else{            

            firstOutput.textContent = button.textContent;}

        }else {

          firstOutput.textContent += button.textContent;

        }

    });

});

 

function add() {

  return secondOutput.textContent = Number(firstNumber) + Number(secondNumber);

};

 

function subtract() {

    return secondOutput.textContent = Number(firstNumber) - Number(secondNumber);

};

 

function multiply() {

  return secondOutput.textContent = Number(firstNumber) * Number(secondNumber);

};

function multiplyWithMinus() {

  return secondOutput.textContent = -(Number(firstNumber) * Number(secondNumber));

};

 

function division() {

  let sum = Number(firstNumber) / Number(secondNumber);

  return secondOutput.textContent = sum;

 

};

function divisionWithMinus() {

  let sum = Number(firstNumber) / Number(secondNumber);

  return secondOutput.textContent = -sum;

 

};

 

function addSubWithTwoMignusSigns(){

  let sum = -Number(firstNumber) - Number(secondNumber);

  return secondOutput.textContent = sum;

};

 

function addSubWithPlus(){

  let sum = -Number(firstNumber) + Number(secondNumber);

  return secondOutput.textContent = sum;

};




//let firstArray = firstOutput.textContent.split('');

//console.log(firstArray)

let firstNumber = 0;

//let operator = '';

let secondNumber = 0;

 

function operate(){

  let firstString = firstOutput.textContent;

  let arr = firstString.split('');// need another logique

  for(let i =0 ; i<arr.length ; i++){

 

    if (arr[i]== '+'){

        //console.log('test');

        let arrAddition = firstString.split('+');

        firstNumber = arrAddition[0];

        secondNumber = arrAddition[1];

        add();

    }else if(arr[i]== '-'){

      //console.log('test');

      let arrSubtraction = firstString.split('-');

      firstNumber = arrSubtraction[0];

      secondNumber = arrSubtraction[1];

      subtract()

    }else if(arr[i]== 'x'){

      let arrMultiply = firstString.split('x');

      firstNumber = arrMultiply[0];

      secondNumber = arrMultiply[1];

      multiply();

    }else if(arr[i]== '÷'){

      let arrDivision = firstString.split('÷');

      firstNumber = arrDivision[0];

      secondNumber = arrDivision[1];

      division();

    }else if(arr[i]== '%'){

      let arrDivision = firstString.split('%');

      firstNumber = arrDivision[0];

      secondNumber = 100;

      division();

    }else if(arr[0]=='-'){

      arr.shift();

      for(let i = 0 ; i<arr.length ; i++){

        if(arr[i]== '-'){

          let strSub = arr.join('');

          //console.log(arr)

          //console.log(typeof strSub)

          let arrSubtraction1 = strSub.split('-');

          firstNumber = arrSubtraction1[0];

          secondNumber = arrSubtraction1[1];

          addSubWithTwoMignusSigns()

          return secondOutput.textContent = secondOutput.textContent;

        }else if(arr[i]== '+'){

          let strSub = arr.join('');

          let arrSubtraction1 = strSub.split('+');

          firstNumber = arrSubtraction1[0];

          secondNumber = arrSubtraction1[1];

          addSubWithPlus()

          return secondOutput.textContent = secondOutput.textContent;

        }else if(arr[i]== 'x'){

          let strSub = arr.join('');

          let arrSubtraction1 = strSub.split('x');

          firstNumber = arrSubtraction1[0];

          secondNumber = arrSubtraction1[1];

          multiplyWithMinus();

          return secondOutput.textContent = secondOutput.textContent;

      }else if(arr[i]== '÷'){

        let strSub = arr.join('');

        let arrSubtraction1 = strSub.split('÷');

        firstNumber = arrSubtraction1[0];

        secondNumber = arrSubtraction1[1];

        divisionWithMinus();

        return secondOutput.textContent = secondOutput.textContent;

    }}

 

      //console.log(addSub())

      //console.log(secondOutput.textContent);

    }

  //console.log('kkkk')

  //console.log(typeof firstString); //string

  //console.log(arr);

}};

 

equalBtn.addEventListener('click',operate);

additionBtn.addEventListener('click',()=>{

  operate();

  if(secondOutput.textContent == ''){

    firstOutput.textContent += additionBtn.textContent;

  }else if (secondOutput !== ''){

    firstOutput.textContent = secondOutput.textContent + additionBtn.textContent;

  }

});

 

subBtn.addEventListener('click',()=>{

  //console.log(firstOutput.textContent.length)

  operate();

  if(secondOutput.textContent == ''){

    firstOutput.textContent += subBtn.textContent;

  }else if (secondOutput.textContent !== ''){

    firstOutput.textContent = secondOutput.textContent + subBtn.textContent;

   

  }

});

 

multiBtn.addEventListener('click',()=>{

    //console.log('etxt')

    operate();

    if(secondOutput.textContent == ''){

      firstOutput.textContent += multiBtn.textContent;

    }else if (secondOutput !== ''){

      firstOutput.textContent = secondOutput.textContent + multiBtn.textContent;

     

    }

});

 

divBtn.addEventListener('click',()=>{

    operate();

    if(secondOutput.textContent == ''){

      firstOutput.textContent += divBtn.textContent;

    }else if (secondOutput !== ''){

      firstOutput.textContent = secondOutput.textContent + divBtn.textContent;

    }

});

 

centBtn.addEventListener('click',operate);