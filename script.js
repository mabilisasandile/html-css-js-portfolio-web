
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Message logic
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emailForm');
    if (!form) return; // Prevent further errors if form is missing

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const FormData = {
            name,
            email,
            subject,
            message
        };

        // Send email request
        fetch('https://my-node-app-qfg5.onrender.com/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ FormData }),
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    });
});
