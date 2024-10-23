
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// Message logic
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const FormData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

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


// Modal logic
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close');

    // Check if elements are properly referenced
    if (openModalBtn && modal && closeModalBtn) {
        // Open modal when button is clicked
        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        // Close modal when "X" is clicked
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('One or more modal elements are not found in the DOM.');
    }
});
 