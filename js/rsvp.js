document.addEventListener('DOMContentLoaded', function() {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbweOXdeWoVhrqWT5G9i6dpgWdrabXiDbsOQ0nv2TDLk89sZIACK3s5sd38SHTVpCIA5uQ/exec';

    document.getElementById('rsvpForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var form = this;
        var formData = new FormData(form);
        
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if(result.result === "success") {
                alert('RSVP submitted successfully!');
                form.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});