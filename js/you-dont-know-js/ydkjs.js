const TAX_RATE = 1.2;
const PHONE_PRICE = 9999.99;
const ACCESSOIR_PRICE = 400;
const MIN_BALANCE = 1000;

let balance = prompt("Type your balance:", 0);
let price = 0;

function priceTax(price) {
    return price * TAX_RATE;
}

function formatPrice(price) {
    return "$" + price.toFixed(2)
}

while (price < balance) {
    price = price + PHONE_PRICE;
    if (price < MIN_BALANCE) {
        price = price + ACCESSOIR_PRICE;
    }
}

price = price + priceTax(price);

console.log(
    "Spendings: " + formatPrice(price)
);

if (price > balance) {
    console.log("Sorry you cannot afford that spendings..")
}


// function sumToBuyPhone() {
//     phone_tax = (PHONE_PRICE * TAX_RATE);
//     return console.log("$" + phone_tax.toFixed(2));
// }

// function sumToBuyAccesoir() {
//     accesoir_tax = (ACCESSOIR_PRICE * TAX_RATE);
//     return console.log("$" + accesoir_tax.toFixed(2));
// }

// while (balance > MIN_BALANCE) {
//     (sumToBuyAccesoir() + sumToBuyPhone()) - balance
// }


// function overallPhonePrice() {
//     return (PHONE_PRICE + ACCESSOIR_PRICE) * TAX_RATE;
// }

// while (balance > minBalance) {
//     balance = balance - overallPhonePrice();
//     console.log(+(balance.toFixed(2)));
//     if (balance < minBalance) {
//         console.log("You cannot buy phone");
//         break;
//     }
// }