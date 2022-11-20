let startEle = document.getElementById("start");
let problemsEle = document.getElementsByClassName("problems")[0];
let calculateEle = document.getElementById("calculate")



function generateRendomNumber (range){
    return parseInt(Math.random() * range)
}



function textToSymbol(text){
    switch(text){
        case "Add":
            return '+'
            break; 
        case "Sub":
            return '-'
            break; 
        case "Multify":
            return '*'
            break; 
        default:
            return '/'
            break; 
                    
    }
}



function resetProblems(){
    problemsEle.innerHTML = ""
}



function enableCaculate(){
    calculateEle.removeAttribute("disabled")
}



function updateProblems(number1, number2, operation){
    //Create problem div
    let problemEle = document.createElement("div");
    problemEle.setAttribute("class", "problem");

    let number1Ele = document.createElement("h3");
    number1Ele.setAttribute("class", "number1");
    number1Ele.innerText = number1;

    let number2Ele = document.createElement("h3");
    number2Ele.setAttribute("class", "number2");
    number2Ele.innerText = number2;

    let opertionEle = document.createElement("h3");
    opertionEle.setAttribute("class", "operation");
    opertionEle.innerText = textToSymbol(operation);

    let hr1 = document.createElement("hr");
    hr1.setAttribute;

    let inputEle = document.createElement("input");
    inputEle.setAttribute("class", "answer");
    inputEle.setAttribute("type", "text");

    let hr2 = document.createElement("hr");
    hr2.setAttribute;

    problemEle.append(number1Ele);
    problemEle.append(opertionEle);
    problemEle.append(number2Ele);
    problemEle.append(hr1);
    problemEle.append(inputEle);
    problemsEle.append(problemEle);
    problemEle.append(hr2);
    //Append inside problems
}



let operationsStart = function(){

    let operationselect = document.getElementById("operations");
    let rangeselect = document.getElementById("ranges");

    let operation = operationselect.value;
    let range = parseInt(rangeselect.value);
    let randomNumber1;
    let randomNumber2;
   

   //Create 16 Problems
    if(operation !== 'Divide'){

        resetProblems();
        for(let i=1; i<=16; i++){
            //rendom no 1
            randomNumber1 = generateRendomNumber(range); 
            randomNumber2 = generateRendomNumber(range);
            updateProblems(randomNumber1, randomNumber2, operation)
            //rendom no 2
        }
        enableCaculate();
    }


}

startEle.addEventListener("click", operationsStart);

function operation2(){
   let problemElements = document.getElementsByClassName("problem");

   let problemEle;
   let operationEle;
   let operationType;
   let number1Ele;
   let number1Value;
   let number2Ele;
   let number2Value;
   let expectedAnswer;
   let actualAnswerEle;
   let actualAnswer; 
   let mark = 0;


   for(let i=0; i<problemElements.length; i++){
    problemEle = problemElements[i];

    operationEle = problemEle.getElementsByClassName("operation")[0];

    operationType = operationEle.innerText;
   

    number1Ele = problemEle.getElementsByClassName("number1")[0];
    number1Value = parseInt (number1Ele.innerText);
    

    
    number2Ele = problemEle.getElementsByClassName("number2")[0];
    number2Value = parseInt (number2Ele.innerText);
    

    if(operationType == '+'){
        expectedAnswer = number1Value + number2Value;
    }else if(operationType == "-"){
        expectedAnswer = number1Value - number2Value;
    }else if (operationType == "*"){
        expectedAnswer = number1Value * number2Value;
    }else{
        expectedAnswer = number1Value / number2Value;
    }

    actualAnswerEle = problemEle.getElementsByClassName("answer")[0];
    actualAnswer = parseInt(actualAnswerEle.value);

    if(expectedAnswer == actualAnswer){
        mark = mark +1;
    }
   }

   alert("Your Mark Is " + mark);
}

calculateEle.addEventListener("click", operation2);