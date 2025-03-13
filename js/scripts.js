document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const api_key = "873221da66e817dce14bc8f61c8e0c70"
    const account_sid = "ACa144dfc78fa264c646e177332a0e288d"
    const auth_token = "eb4b18bdaf2e1aeb40e494e9b79f414a"

    const data = {
        to: 'danielabiy6@gmail.com',
        from: email,
        subject: `Contact Form Submission from ${name}`,
        text: message
    };

    fetch('https://api.twilio.com/2010-04-01/Accounts/account_sid/Messages.json', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa('account_sid:auth_token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message.');
    });
});