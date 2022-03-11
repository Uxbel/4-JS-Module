// Se almacena en una variable los datos introducidos

var inputA = () => document.getElementById("input-A").value;
var inputB = () => document.getElementById("input-B").value;

// Se realiza la operación aritmética

var sum = () => Number(inputA()) + Number(inputB());
var subtraction = () => Number(inputA()) - Number(inputB());
var multiplication = () => Number(inputA()) * Number(inputB());
var division = () => Number(inputA()) / Number(inputB());

// Muestra el resultado final según la operación concreta

var resultSum = () => document.getElementById("resultado").innerText = sum();
var resultSubtraction = () => document.getElementById("resultado").innerText = subtraction();
var resultMultiplication = () => document.getElementById("resultado").innerText = multiplication();
var resultDivision = () => document.getElementById("resultado").innerText = division();

// Condicionales - Mensaje de error en caso de no incluir dos numeros

var checkSum = () => {
    console.log(isNaN(inputA()))
    console.log(isNaN(inputB()))
    if (isNaN(inputA()) || isNaN(inputB())){
        document.getElementById("resultado").innerText = "Introduce todos los números";
    } else {
        resultSum();
    };
};

var checkSubtraction = () => {
    if (isNaN(inputA()) || isNaN(inputB())){
        document.getElementById("resultado").innerText = "Introduce todos los números";
    } else {
        resultSubtraction();
    };
};

var checkMultiplication = () => {
    if (isNaN(inputA()) || isNaN(inputB())){
        document.getElementById("resultado").innerText = "Introduce todos los números";
    } else {
        resultMultiplication();
    };
};

var checkDivision = () => {
    if (isNaN(inputA()) || isNaN(inputB())){
        document.getElementById("resultado").innerText = "Introduce todos los números";
    } else {
        resultDivision();
    };
};

// Registrar la función result como event listener del click que queremos enviar

document.getElementById("suma").addEventListener("click", checkSum);
document.getElementById("resta").addEventListener("click", checkSubtraction);
document.getElementById("multiplicacion").addEventListener("click", checkMultiplication);
document.getElementById("division").addEventListener("click", checkDivision);

