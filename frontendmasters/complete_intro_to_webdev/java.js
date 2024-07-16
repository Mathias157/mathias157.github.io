var audio = document.getElementById('mySound');

// Select all buttons except for the one that starts the sound
var buttons = document.querySelectorAll('button.buttons');

// Add click event listeners to all selected buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the audio element
        var soundFile = button.getAttribute('data-sound');
        audio.src = soundFile

        // If the audio is playing, stop it and rewind
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
        // Play the audio from the beginning
        audio.play();
    });
});


// Calculator functions
var screen = document.querySelector('.screen');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var text = button.textContent;
        var button_type = button.id
        var temporary_number = screen.getAttribute('data-temporary_number');
        var last_operation = screen.getAttribute('data-last_operation');

        // Clear button
        if (button_type == 'clear') {
            screen.textContent = '0';
            screen.setAttribute('data-temporary_number', '0');
            return
        }
        
        // Operation 
        if (button_type == 'add' || button_type == 'subtract' || button_type == 'multiply' || button_type == 'divide') {
            if (screen.textContent === '0') {
                screen.setAttribute('data-last_operation', button_type);
                return
            }
            if (last_operation == 'none') {
                screen.setAttribute('data-temporary_number', screen.textContent);
                screen.setAttribute('data-last_operation', button_type);
                screen.textContent = '0';
                return
            } else {
                var new_number = operation(last_operation, +temporary_number, +screen.textContent);
                screen.setAttribute('data-temporary_number', new_number.toString());
                screen.setAttribute('data-last_operation', button_type);
                screen.textContent = '0';
                return
            }
        }
        
        // Equal button
        if (button_type == 'equals') {
            var new_number = operation(last_operation, +temporary_number, +screen.textContent);
            screen.setAttribute('data-last_operation', 'none');
            screen.setAttribute('data-temporary_number', '0');
            screen.textContent = new_number.toString(); 
            return;
        }

        // Deleting
        if (button_type == 'delete' && screen.textContent.length != 1) {
            screen.textContent = screen.textContent.slice(0, -1);
            return;
        } else if (button_type == 'delete' && screen.textContent.length == 1) {
            screen.textContent = '0';
            return;
        }

        // If the screen is equal to zero
        if (screen.textContent === '0') {
            screen.textContent = text;
            return;
        } else {
            screen.textContent += text;
        }
    });
});

function operation(type, num1, num2) {
    if (type == 'add') {
        return num1 + num2;
    } else if (type == 'subtract') {
        return num1 - num2;
    } else if (type == 'multiply') {
        return num1 * num2;
    } else if (type == 'divide') {
        return num1 / num2;
    }
}