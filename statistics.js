//initial functions

//promedio
function promedio(list){
    var sumaLista = list.reduce((acumulado=0, item)=> acumulado+=item);
    return (sumaLista / list.length).toFixed(5); 
}

//mediana
function esPar(number){
    return number%2===0;
}

function mediana(list){
    const position = parseInt(list.length/2);
    if(!esPar(list.length)){
        return list[position];
    } else {
        return promedio([list[position], list[position-1]]);
    }
}

//interaction with HTML

//promedio
function calcularPromedio(){
    const input = document.getElementById("statistics-input");
    const input_value = input.value.trim().split(' ');
    const number_input_value = input_value.map(value => parseFloat(value));
    const resultado = promedio(number_input_value);
    const statisticsResultTag = document.getElementById("statisticsResult");
    statisticsResultTag.innerText = resultado;
}

//mediana
function calcularMediana(){
    const input = document.getElementById("statistics-input");
    const input_value = input.value.trim().split(' ');
    const number_input_value = input_value.map(value => parseFloat(value));
    const resultado = mediana(number_input_value);
    const statisticsResultTag = document.getElementById("statisticsResult");
    statisticsResultTag.innerText = resultado;
}