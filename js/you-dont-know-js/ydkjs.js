let balance = prompt("Type your balance:", 0);
const TAX_RATE = 1.2;
const PHONE_PRICE = 9999.99;
const ACCESSOIR_PRICE = 400;
let minBalance = 0;

function overallPhonePrice() {
    return (PHONE_PRICE + ACCESSOIR_PRICE) * TAX_RATE;
}
// overallPhonePrice().toFixed(2);


while (balance > minBalance) {
    balance = balance - overallPhonePrice();
    console.log(+(balance.toFixed(2)));
    if (balance < minBalance) {
        console.log("You cannot buy phone");
        break;
    }
}