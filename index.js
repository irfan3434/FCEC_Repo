document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validation example for name field
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Please enter your name.');
        return; // Stop the submission if validation fails
    }

    // ... additional validation checks ...

    // If validation passes, create an object with the form data
    const formData = new FormData(this); // 'this' refers to the form
    let formObject = {};
    formData.forEach((value, key) => formObject[key] = value);

    // Convert form data object to JSON
    const json = JSON.stringify(formObject);

    // AJAX submission using Fetch API
    fetch('https://script.google.com/macros/s/AKfycbzXlkTWwSgfOr5JPHimJ-N-I_sl6ptdrPmxkpCsG7ddU_PYnW8FitHTfQKawvyad7bp/exec', { // Replace with your Google Script URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json // Send the JSON data
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for your feedback!'); // Show a success message
        event.target.reset(); // Reset the form after successful submission
    })
    .catch((error) => {
        console.log('Error:', error);
        alert('There was an error submitting your form.'); // Show an error message
    });
});
