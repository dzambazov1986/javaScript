function calculateBaggagePrice(input) {
    let baggageFee = 0;

    while (numberOfBags > 0) {
        if (weight <= 10) {
            baggageFee += 0.2 * basePrice;
        } else if (weight <= 20) {
            baggageFee += 0.5 * basePrice;
        } else {
            console.log("Enter baggage fee: ");
            baggageFee += parseFloat(prompt());
        }

        if (daysUntilTravel > 30) {
            baggageFee += 0.1 * baggageFee;
        } else if (daysUntilTravel >= 7) {
            baggageFee += 0.15 * baggageFee;
        } else {
            baggageFee += 0.4 * baggageFee;
        }

        numberOfBags--;
    }

    return baggageFee.toFixed(2);
}

let weight = parseFloat(prompt("Enter the weight of the baggage: "));
let daysUntilTravel = parseInt(prompt("Enter days until travel: "));
let numberOfBags = parseInt(prompt("Enter the number of bags: "));

let totalPrice = calculateBaggagePrice(basePrice, weight, daysUntilTravel, numberOfBags);
console.log(`The total price of bags is: ${totalPrice} lv.`);
