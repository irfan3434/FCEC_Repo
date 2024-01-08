document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your validation or form submission logic here
    alert('Form submitted');
});

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validation example for name field
        const name = document.getElementById('name').value;
        if (!name) {
            alert('Please enter your name.');
            return; // Stop the submission if validation fails
        }

        // ... additional validation checks ...

        // If validation passes, create a FormData object
        const formData = new FormData(feedbackForm);

        // AJAX submission example using Fetch API
        fetch('submit_form_endpoint.php', { // This should be the URL to which you want to submit the form data
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Assuming the server responds with JSON
        .then(data => {
            console.log('Success:', data);
            alert('Thank you for your feedback!'); // Show a success message
            feedbackForm.reset(); // Reset the form after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your form.'); // Show an error message
        });
    });
});
