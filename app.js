const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');
console.log(`Welcome, ${username}!`);

let play = true;
while (play === true) {
    let playerAlive = true;

    const direction = prompt('Which way do you go, left or right? ')
    if(direction == 'left') {
        console.log('\nYou go left and see an accountant.');
        const action = prompt('What do you do? Fight, do your taxes, do their taxes? ')
        if(action == 'fight') {
            console.log('\nThe accountant kills you with a pen.');
            playerAlive = false;
        }
        else if(action == 'do your taxes') {
            console.log('\nYou chose poorly. Get ready.');
            
            const userTaxesAction = prompt('How much did you make this previous tax year? ');
            const userIncome = Number(userTaxesAction);
            
            if(userIncome >= 150000) {
                console.log("\nYou're income of $" + `${userIncome}` + " is more than $150,000. You were audited and charged thousands of dollars by the accountant!");
            } else if(userIncome <= 50000) {
                console.log("\nYou made less than $50,000. You got a return and win! Congrats!");
            } else {
                const taxesPaid = prompt('How much did you pay in taxes this previous year? '); 
                console.log("\n$" + `${taxesPaid}` + " is not enough! You are going to jail!");
            }
        } else if(action == 'do their taxes') {
            console.log('\nAfter 12 hours of working on their taxes, the accountant gets frustrated and kills you with a pen.');
            playerAlive = false;
        }
    } else if(direction == 'right') {
        console.log("\nYou walk down a trail to an opening. You see a large tarmac and a pilot standing next to his private jet.");
        const action = prompt('What do you do? Flight or run: ');
        if (action == 'flight') {
            console.log('\nThe pilot invites you along for a flight and you accept. Midflight, the stewardess offers you a drink.');
            const drink = prompt('Do you take the drink? ');
            if (drink === 'yes') {
                console.log("\nAfter 10 minutes, you begin to feel queasy and pass out. You died of poisoning.");
                playerAlive = false;
            }
            else if (drink == 'no') {
                console.log('\nYou politely decline and the stewardess moves to the back of the plane.');
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

                console.log("What do you want to do to survive?");
                const action = prompt('Fish or find shelter: ');
                if (action == "fish") {
                    console.log("\nYou find a nearby pond and construct a basic fishing rod and spear.");
                    const hours = prompt('How many hours do you want to spend fishing? ');
                    let fishCaught = 0;
                    for(i = 0; i < hours; i++) {
                        food -= 5;
                        health -= 2;
                        water -= 10;
                        fishCaught += 1;
                    }
                    console.log('\nYou caught ' + fishCaught + ' fish.');
                    food += (fishCaught * 5);
                    if (food > 100) 
                        food = 100;
                    
                } else if (action == 'find shelter') {
                    console.log('\nYou move more inland to look for shelter. Which landmark do you follow?');
                    const shelterAction = prompt('Mountains: ');
                    if (shelterAction == 'Mountains') {
                        console.log('\nYou find a cave! Growling within reveals a large grizzly. What do you do? ')
                        const caveAction = prompt('Bear hug, run, try to reason with it: ')
                        if (caveAction == 'Bear hug') {
                            console.log('\nYou were successful and hugged the bear. You died.')
                            playerAlive = false;
                        }
                        else if (caveAction == 'run') {
                            console.log('\nThe bear hunts you down. You died.')
                            playerAlive = false;
                        }
                        else if (caveAction == 'try to reason with it')
                            console.log('\nYou yell at the bear to be quiet and leave. The bear seems to understand and looks shocked. It complies and you sleep peacefully for the night.')
                    }
                    //else if (shelterAction === 'Jungle') 
                        
                }
                // else if (action === 'Explore')
                    
                    
            } else {
                console.log('\nThe stewardess throws the drink at you and you begin to feel queasy. You pass out and die of poisoning.');
                playerAlive = false;
            }
        }
    } else {
        console.log('\nNot a valid direction!');
    }

    console.log("\nGame over!!");
    if (playerAlive === true)
        console.log(`${username} managed to stay alive! Congrats!`);
    else
        console.log(`${username} died. What a shame.`);

    console.log();
    const playAgain = prompt('Do you want to play again? ');
    if (playAgain == 'yes' || playAgain == 'y') continue;
    else play = false;
}