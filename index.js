document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Validation example for name field
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Please enter your name.');
        event.preventDefault(); // Prevent the form submission if validation fails
    }

    // ... additional validation checks ...

    // If validation passes, Netlify will handle the form submission
});
