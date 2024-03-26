const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');
console.log(`Welcome, ${username}!`);

const direction = prompt('Which way do you go, left or right? ')
if(direction === 'left') {
    console.log('You go left');
    const action = prompt('You see an accountant. What do you do? Fight, do your taxes, do their taxes? ')
    if(action === 'fight') {
        console.log('The accountant kills you with a pen.');
    } else if(action === 'do your taxes') {
        console.log('You choose poorly. Get ready.');
        
        const userTaxesAction = prompt('How much did you make this previous tax year? ');
        let userIncome = Number(userTaxesAction);
        if(userIncome >= 150000) {
            console.log("You're income of $" + `${userIncome}` + " is more than $150,000. You were audited and charged thousands of dollars by the accountant!");
        } else if(userIncome <= 50000) {
            console.log("You made less than $50,000. You got a return and win! Congrats!");
        } else {
            const taxesPaid = prompt('How much did you pay in taxes this previous year? '); 
            console.log("$" + `${taxesPaid}` + " is not enough! You are going to jail!");
        }
    } else if(action === 'do their taxes') {
        console.log('After 12 hours of working on their taxes, the accountant gets frustrated and kills you with a pen.');
    }
} else if(direction === 'right') {
    console.log("You walk down a trail to an opening. You see a large tarmac and a pilot standing next to his private jet.");
    const action = prompt('What do you do? Flight, Inquire, ');
    if (action === 'flight') {
        console.log('The pilot invites you along for a flight and you accept. Midflight, the stewardess offers you a drink.');
        const drink = prompt('Do you take the drink? ');
        if (drink === 'yes')
            console.log("After 10 minutes, you begin to feel queasy and pass out. You died of poisoning.");
        else if (drink === 'no') {
            console.log('You politely decline and the stewardess moves to the back of the plane.');
            console.log('After a few hours in flight, you feel the plane begin to lose altitude and land a short time later.');
            console.log('You exit the plane and discover you are on an island. The pilot and and stewardess are nowhere to be seen.');
            
            // >> SURVIVOR ISLAND << //
            // Player stats init
            let health = 100.0;
            let food = 100.0;
            let water = 100.0;

            // const displayStatus(x, y, z) {
            //     console.log('Health: ' + x);
            // }

            const action = prompt('What do you want to do to survive? Fish, Find shelter, ');
            if (action === "fish") {
                const hours = prompt('You find a nearby pond and construct a basic fishing rod and spear. How many hours do you want to spend fishing? ');
                for(i = 0; i < hours; i++) {
                    
                }
            }
        } else
            console.log('The stewardess throws the drink at you and you begin to feel queasy. You pass out and die of poisoning.');
    }
}
