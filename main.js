let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 43;


if (registeredEarly && age > 18) {
    raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
    console.log(`Your race number is ${raceNumber} and race is at 9:30am`)
} else if (age > 18 && !registeredEarly) {
    console.log(`Your race number is ${raceNumber} and race is at 11:00am`)
} else if (age < 18){
    console.log(`Your race number is ${raceNumber} and race is at 12:00pm`)
}
