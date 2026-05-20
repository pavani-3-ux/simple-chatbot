const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Handle send button click
sendBtn.addEventListener("click", handleSend);
// Handle Enter key
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});

function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;

  // Show user message
  addMessage(text, "user");

  // Clear input
  userInput.value = "";

  // Get bot reply
  const reply = getBotReply(text);

  // Simulate delay
  setTimeout(() => {
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Very simple rule-based chatbot
function getBotReply(userText) {
  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! 👋 How can I help you today?";
  }

  if (text.includes("how are you")) {
    return "I'm just code, but I'm running fine! 😄 How are you?";
  }

  if (text.includes("your name")) {
    return "I'm a simple chatbot created for your project.";
  }

  if (text.includes("bye")) {
    return "Goodbye! Have a great day! 👋";
  }

  // Default reply
  return "I’m not sure how to answer that yet, but I’m still learning. 😊";
}
