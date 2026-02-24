const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatOutput = document.getElementById('chatOutput');

sendBtn.addEventListener('click', async () => {
  const userText = userInput.value;
  if (userText.trim() === "") return;

  // Visa meddelandet från användaren
  const pUser = document.createElement('p');
  pUser.textContent = "Du: " + userText;
  chatOutput.appendChild(pUser);

  // Skicka meddelandet till Vercel backend
const res = await fetch("https://bilmek-project-wjick0iwi-alkatal1981s-projects.vercel.app/api/ai", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userText })
});
  const data = await res.json();

  // Visa AI-svaret
  const pAI = document.createElement('p');
  pAI.textContent = "AI: " + data.reply;
  chatOutput.appendChild(pAI);

  userInput.value = "";
  chatOutput.scrollTop = chatOutput.scrollHeight;
});

// Skicka med Enter-tangenten
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
