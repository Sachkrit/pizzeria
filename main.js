function add_item(){
var reccomended_pizza = document.getElementById("add_item").value;
console.log(reccomended_pizza);
document.getElementById("newpizza").innerHTML = "Pizzas: 1. Tomato, onion, olive 2. Golden corn and olive, 3. " + reccomended_pizza;
}