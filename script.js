const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatOutput = document.getElementById("chatOutput");

sendBtn.addEventListener("click", async () => {
  const userText = userInput.value.trim();
  if (!userText) return;

  // Visa användarens meddelande
  const userMessage = document.createElement("p");
  userMessage.textContent = "Du: " + userText;
  chatOutput.appendChild(userMessage);

  try {
    const response = await fetch("https://bilmek-project-wjick0iwi-alkatal1981s-projects.vercel.app/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userText })
    });

    const data = await response.json();

    const aiMessage = document.createElement("p");

    if (data.reply) {
      aiMessage.textContent = "AI: " + data.reply;
    } else {
      aiMessage.textContent = "AI: Något gick fel.";
      console.log("Server response:", data);
    }

    chatOutput.appendChild(aiMessage);

  } catch (error) {
    console.error("Fetch error:", error);

    const errorMessage = document.createElement("p");
    errorMessage.textContent = "AI: Kunde inte kontakta servern.";
    chatOutput.appendChild(errorMessage);
  }

  userInput.value = "";
  chatOutput.scrollTop = chatOutput.scrollHeight;
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
