const frutas = []

const fruta = prompt("🍒 fruit market 🍌. what fruit do you want?")

frutas.push(fruta)

while (confirm("any more fruit? 🛒")) {
    const fruta = prompt("What other fruit do you want to buy? 🥝")
    frutas.push(fruta)
}
console.log("Usted compro: " + frutas)

for (let fruta of frutas){
    console.log(fruta);
}