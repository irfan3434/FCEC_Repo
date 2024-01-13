document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Validation example for name field
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Please enter your name.');
        event.preventDefault(); // Prevent the form submission if validation fails
        return;
    }

    const employeeId = document.getElementById('employeeId').value;
    if (!employeeId) {
        alert('Please enter your Employee ID');
        event.preventDefault(); // Prevent the form submission if validation fails
        return;
    }

    // ... additional validation checks ...

    // If validation passes, allow the form to be submitted
    // Netlify Forms will handle the form submission
});
