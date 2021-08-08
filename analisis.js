function esPar(length){
    return length%2===0;
}

function cPromedio(list){
    return (list.reduce((total=0, value)=> total+=value)) / list.length;
}

function medianaSalarios(list){
    var mitad = parseInt(list.length / 2);
    return (esPar(list.length)) ? cPromedio([list[mitad],list[mitad-1]]) : list[mitad];
}

const salariosCol = colombia.map(position => position.salary);
salariosCol.sort((valueA, valueB) => valueA-valueB);

function analisis(){
    console.log(medianaSalarios(salariosCol));
}

function analisisTop(){
    var spliceStart = parseInt((salariosCol.length*90)/100);
    console.log(medianaSalarios(salariosCol.splice(spliceStart, parseInt(salariosCol.length - spliceStart))));
}