//initial functions
function promedio(list){
    var sumaLista = 0;
    list.forEach(value => sumaLista+=value);
    return (sumaLista / list.length).toFixed(5); 
}


//interaction with HTML
function calcularPromedio(){
    const input = document.getElementById("statistics-input");
    const input_value = (input.value.trim()).split(' ');
    const number_input_value = input_value.map(value => parseFloat(value));
    console.log(number_input_value);
    const resultado = promedio(number_input_value);
    const statisticsResultTag = document.getElementById("statisticsResult");
    statisticsResultTag.innerText = resultado;
}