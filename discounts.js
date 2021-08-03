//initial functions

function finalPrice(price, discount){
    return (price * (100 - discount)) / 100;
}
//interaction with html

function calculateDiscount(){
    const price_input = document.getElementById("discount-original-price");
    const price_value = price_input.value;
    const discount_input = document.getElementById("discount-discount");
    const discount_value = discount_input.value;
    const final_price = finalPrice(price_value, discount_value);
    alert(final_price);
}