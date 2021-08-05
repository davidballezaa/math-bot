//initial functions

function finalPrice(price, discount){
    return (price * (100 - discount)) / 100;
}
//interaction with html

const price_input = document.getElementById("discount-original-price");
const discount_input = document.getElementById("discount-discount");


function getFinalPrice() {
    const price_value = price_input.value;
    const discount_value = discount_input.value;
    const final_price = finalPrice(price_value, discount_value);
    const priceResult_span = document.getElementById("priceResult");
    priceResult_span.innerText = final_price;
}

price_input.addEventListener("change", getFinalPrice);
price_input.addEventListener("keyup", getFinalPrice);
discount_input.addEventListener("change", getFinalPrice);
discount_input.addEventListener("keyup", getFinalPrice);
