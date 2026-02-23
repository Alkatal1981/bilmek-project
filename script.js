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
  const pAI = document.createElement('p');
  pAI.textContent = "AI: Jag förstår '" + userText + "'";
  chatOutput.appendChild(pAI);

  userInput.value = "";
  chatOutput.scrollTop = chatOutput.scrollHeight;
});

userInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') sendBtn.click();
});
