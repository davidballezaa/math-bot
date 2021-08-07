//initial functions

//promedio
function promedio(list){
    var sumaLista = list.reduce((acumulado=0, item)=> acumulado+=item);
    return (sumaLista / list.length).toFixed(2); 
}

//mediana
function esPar(number){
    return number%2===0;
}

function mediana(list){
    list.sort(function(valueA, valueB){
        return valueA - valueB;
    });
    const position = parseInt(list.length/2);
    if(!esPar(list.length)){
        return list[position];
    } else {
        return promedio([list[position], list[position-1]]);
    }
}

//moda

function moda(list){
    var res = [];
    var inputCount = {};
    list.forEach(value => (inputCount[value]) ?  inputCount[value]+=1 : inputCount[value]=1);
    var inputCountValues = Object.values(inputCount);
    var inputCountArray = Object.entries(inputCount);
    var maxCount = Math.max(...inputCountValues);
    inputCountArray.forEach(function(value){
      if(value[1]==maxCount){ res.push(value[0]); }
    });
    return res;
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

//moda
function calcularModa(){
    const input = document.getElementById("statistics-input");
    const input_value = input.value.trim().split(' ');
    const number_input_value = input_value.map(value => parseFloat(value));
    const resultado = moda(number_input_value); 
    const statisticsResultTag = document.getElementById("statisticsResult");
    statisticsResultTag.innerText = resultado;
}