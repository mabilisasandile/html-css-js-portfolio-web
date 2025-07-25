
async function sendNotification () {

    try {
        const FormData = {
            name: "Sandile",
            email: "sandile.portfolio@gmail.com",
            subject: "Portfolio view",
            message: "Someone visited your portfolio site."
        }
    
        // Send email request
        await fetch('https://my-node-app-qfg5.onrender.com/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ FormData }),
        })
        .then(response => response.text())
        .then(data => console.log(data))
        
    } catch (error) {
        console.log("Sending notification error:", error)
        console.error('Error sending email:', error.message, error.response);
    }
    
}

// Load data when the page loads
window.onload = sendNotification;