//your JS code here. If required.
 var counterElement = document.getElementById('counter');
        var incrementBtn = document.getElementById('incrementBtn');

        // Add a click event listener to the button
        incrementBtn.addEventListener('click', function () {
            // Get the current counter value
            var currentValue = parseInt(counterElement.innerText);

         // Increment the counter value
            counterElement.innerText = currentValue + 1;
			
            // Display an alert with the current value before incrementing
            alert(currentValue);

           
        });