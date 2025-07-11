document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sendBtn").addEventListener("click", sendMessage);
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  input.value = "";

  fetch("https://my-node-app-qfg5.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
  .then(res => res.json())
  .then(data => {
    appendMessage("Sandile", data.reply);
  })
  .catch(() => {
    appendMessage("Sandile", "Sorry, something went wrong.");
  });
}

function appendMessage(sender, text) {
  const messages = document.getElementById("messages");
  const msg = document.createElement("div");
  msg.textContent = `${sender}: ${text}`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}
