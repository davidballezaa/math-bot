//initial functions
function promedio(list){
    list.sort();
}


//interaction with HTML
function calcularPromedio(){
    const input = document.getElementById("statistics-input");
    const input_value = (input.value).split('-');
    const number_input_value = input_value.map(value => parseInt(value));
    const resultado = promedio(number_input_value);
    const statisticsResultTag = document.getElementById("statisticsResult");
    statisticsResultTag.innerText = resultado;
}