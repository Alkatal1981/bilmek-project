const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatOutput = document.getElementById('chatOutput');

sendBtn.addEventListener('click', () => {
  const userText = userInput.value;
  if(userText.trim() === "") return;

  const pUser = document.createElement('p');
  pUser.textContent = "Du: " + userText;
  chatOutput.appendChild(pUser);

  // Simulerat AI-svar
const res = await fetch("https://8a00e218-fd3a-4724-a7ee-0b8823ab0eae-00-zjz10cajkzn2.riker.replit.dev/ai", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userText })
});

  userInput.value = "";
  chatOutput.scrollTop = chatOutput.scrollHeight;
});

userInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') sendBtn.click();
});
