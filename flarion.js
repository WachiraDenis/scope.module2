// console.log("welcome to flarion")
const item = ["carrots", "coffee", "tea"];
console.log ("welcome to flarion");

function purchaseitem(itemToPurchase, quantity)
{
    if (!item.includes(itemToPurchase)){
        console.log("error, product not valid")
        return;
    }
    if(isNaN(quantity)){
        "Error, invalid quantity"
        return;
    }
let price;
if(itemToPurchase === "carrots"){
    price = 3;
}
else if(itemToPurchase === "coffee"){
    price = 2;
}
else if(itemToPurchase === "tea"){
    price = 1;
}

const totalPrice= price*quantity;
console.log (`Thanks for shopping! You purchased ${quantity} ${itemToPurchase}(s). The total price is $${totalPrice}`);
}
purchaseitem("carrots", 5);
purchaseitem("nonexistent item", 5);
purchaseitem("banana", "I am not a number");


console.log("See you next time")