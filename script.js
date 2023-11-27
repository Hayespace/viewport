// script.js

const circularWindow = document.querySelector('.circular-window');
const healthBar = document.getElementById('health-bar');
const moneyBar = document.getElementById('money-bar');

let health = 100;
let money = 1000;

function updateBars() {
    healthBar.style.width = `${health}%`;
    moneyBar.style.width = `${(money / 1000) * 100}%`;
}

function performAction(action) {
    switch (action) {
        case 'buy':
            // Logic for buying
            money -= 100;
            break;
        case 'sell':
            // Logic for selling
            money += 200;
            break;
        // Add more cases for different actions

        default:
            break;
    }

    // Update bars and viewport content
    updateBars();
    changeContent();
}

function changeContent() {
    // Logic for changing content in the circular viewport based on game state
    // You can use the existing logic for this
}

// Call the function to initialize the bars and content
updateBars();
changeContent();
