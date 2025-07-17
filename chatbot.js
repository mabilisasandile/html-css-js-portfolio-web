document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sendBtn").addEventListener("click", sendMessage);
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  input.value = "";

  console.log("Sending prompt:", message);

  fetch("https://my-node-app-qfg5.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
  .then(res => {
    console.log("Response status:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Reply from server:", data);
    appendMessage("Sandile", data.reply);
  })
  .catch(err => {
    console.error("Fetch error:", err);
    appendMessage("Sandile", "Sorry, something went wrong.");
  });
}


function appendMessage(sender, text) {
  const messages = document.getElementById("messages");
  const msg = document.createElement("div");

  // Assign a class for styling
  msg.className = sender === "You" ? "message user-message" : "message bot-message";
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;

  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}