function calculateDiscount() {
    const inputPrice = document.getElementById("price__input");
    const inputPriceValue = parseFloat(inputPrice.value);
    const inputDiscount = document.getElementById("discount__input");
    const inputDiscountValue = parseFloat(inputDiscount.value/100);
    const result = (inputPriceValue * inputDiscountValue).toFixed(2);
    const output = document.getElementById("discount__output").innerHTML = result;
    return output;
}