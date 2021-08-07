function esPar(length){
    return length%2===0;
}

function calcularPromedio(list){
    return (list.reduce((total=0, value)=> total+=value)) / list.length;
}

function medianaSalarios(list){
    var mitad = parseInt(list.length / 2);
    return (esPar(list.length)) ? calcularPromedio([list[mitad],list[mitad-1]]) : list[mitad];
}

function analisis(){
    const salariosCol = colombia.map(position => position.salary);
    salariosCol.sort((valueA, valueB) => valueA-valueB);
    console.log(medianaSalarios(salariosCol));
}