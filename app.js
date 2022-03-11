var getName = () => document.getElementById("input-name").value;
var getSurname1 = () => document.getElementById("input-surname1").value;
var getSurname2 = () => document.getElementById("input-surname2").value;
var getFullName = () => getName() + " " + getSurname1() + " " + getSurname2();

var submitName = () => {
    // Mostramos el nombre entero
        document.getElementById("full-name").innerText = getFullName();
}

// Registrar la función submitName como event listener del click que queremos enviar

document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname1").addEventListener("keyup", submitName);
document.getElementById("input-surname2").addEventListener("keyup", submitName);
