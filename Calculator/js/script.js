let display = document.getElementById('display');

let displayText = '';
//get all the buttons 
let buttons = document.querySelectorAll('button');

for(btn of buttons) {
    btn.addEventListener('click', (event) => {
        let buttonValue = event.target.innerText;

        if(buttonValue == 'X') {
            buttonValue = '*';
            displayText += buttonValue;
            display.value = displayText;
        }
        //clear the display
        else if (buttonValue == 'Clear') {
            displayText = "";
            display.value = displayText;
        }
        else if (buttonValue == '=') {
            display.value = eval(displayText);
        }
        else {
            displayText += buttonValue;
            display.value = displayText;
        }
    })
}