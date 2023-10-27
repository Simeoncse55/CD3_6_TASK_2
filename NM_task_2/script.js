document.addEventListener("DOMContentLoaded", function() {
    const chat = document.getElementById("chat");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send");

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();

        if (messageText) {
            const messageElement = document.createElement("div");
            messageElement.className = "alert alert-info";
            messageElement.textContent = messageText;

            chat.appendChild(messageElement);

            // Clear the input field
            messageInput.value = "";

            // Scroll to the bottom of the chat
            chat.scrollTop = chat.scrollHeight;
        }
    });

    messageInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
