function createFloatingNumbers() {
    const body = document.body;
    const numbers = "0123456789";
    
    for (let i = 0; i < 20; i++) { // Adjust the number of floating numbers
        const numberElement = document.createElement('div');
        numberElement.className = 'number';
        numberElement.textContent = numbers.charAt(Math.floor(Math.random() * numbers.length));
        
        // Set random position
        numberElement.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        numberElement.style.bottom = '0'; // Start from the bottom of the page
        
        // Append to body
        body.appendChild(numberElement);
        
        // Set a random animation duration
        numberElement.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random duration between 5s and 10s
    }
}

// Function to handle button clicks
function handleButtonClick(event) {
    const display = document.getElementById('display');
    const value = event.target.getAttribute('data-value');

    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculateResult();
    } else {
        appendToDisplay(value);
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Add event listeners to buttons
function setupButtonListeners() {
    const buttons = document.querySelectorAll('.calc-button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

// Call the function to create floating numbers
createFloatingNumbers();

// Set up button listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupButtonListeners);
