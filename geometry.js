//square

function perimeterSquare(side){
    return side * 4;
}

function areaSquare(side){
    return side*side;
}


//triangle


function perimeterTriangle(firstSide, secondSide, base){
    return Number(firstSide) + Number(secondSide) + Number(base);
}


function areaTriangle(base, height){
    return (base*height)/2;
}

//circle
function diameterCircle(radio){
    return radio*2;
}

const pi = Math.PI;

function circumference(radio){
    return diameterCircle(radio)*pi;
}

function areaCircle(radio){
    return (radio*radio)*pi;
}


//interaction with html

//square
function calculateSquareArea(){
    const side_input = document.getElementById("square-side");
    const side_value = side_input.value;
    const square_area = areaSquare(side_value);
    const unit_input = document.getElementById("square-unit");
    const unit_value = unit_input.value;
    const result_paragraph = document.getElementById("square-result");
    result_paragraph.innerText = "Area: " + square_area + unit_value + "^2";
}

function calculateSquarePerimeter(){
    const side_input = document.getElementById("square-side");
    const side_value = side_input.value;
    const square_perimeter = perimeterSquare(side_value);
    const unit_input = document.getElementById("square-unit");
    const unit_value = unit_input.value;
    const result_paragraph = document.getElementById("square-result");
    result_paragraph.innerText = "Perimeter: " + square_perimeter + unit_value;
}

//triangle
function calculateTriangleArea(){
    const base_input = document.getElementById("triangleBase");
    const base_value = base_input.value;
    const height_input = document.getElementById("triangleHeight");
    const height_value = height_input.value;
    const triangle_area = areaTriangle(base_value, height_value); 
    const unit_input = document.getElementById("triangle-unit");
    const unit_value = unit_input.value;
    const result_paragraph = document.getElementById("triangle-result");
    result_paragraph.innerText = "Area: " + triangle_area+ unit_value + "^2";
}

function calculateTrianglePerimeter(){
    const sideA_input = document.getElementById("triangleSideA");
    const sideA_value = sideA_input.value;
    const sideB_input = document.getElementById("triangleSideB");
    const sideB_value = sideB_input.value;
    const base_input = document.getElementById("triangleBase");
    const base_value = base_input.value;
    const triangle_perimeter = perimeterTriangle(sideA_value, sideB_value, base_value); 
    const unit_input = document.getElementById("triangle-unit");
    const unit_value = unit_input.value;
    const result_paragraph = document.getElementById("triangle-result");
    result_paragraph.innerText = "Perimeter: " + triangle_perimeter+ unit_value;
}

//circle

function calculateCircleArea(){
    const radio_input = document.getElementById("circle-radio");
    const radio_value = radio_input.value;
    const circle_area = areaCircle(radio_value);
    const unit_input = document.getElementById("circle-unit");
    const unit_value = unit_input.value;
    const result_paragraph = document.getElementById("circle-result");
    result_paragraph.innerText = "Area: " + circle_area+ unit_value + "^2";
}

function calculateCirclePerimeter(){
    const radio_input = document.getElementById("circle-radio");
    const radio_value = radio_input.value;
    const circle_perimeter = circumference(radio_value); 
    const unit_input = document.getElementById("circle-unit");
    const unit_value = unit_input.value;
    const result_paragraph = document.getElementById("circle-result");
    result_paragraph.innerText = "Perimeter: " + circle_perimeter + unit_value;
}

