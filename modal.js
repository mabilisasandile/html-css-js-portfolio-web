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
 
