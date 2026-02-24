sendBtn.addEventListener('click', async () => {
  const userText = userInput.value;
  if(userText.trim() === "") return;

  const pUser = document.createElement('p');
  pUser.textContent = "Du: " + userText;
  chatOutput.appendChild(pUser);

  // Riktigt AI-svar från Replit-backend
  const res = await fetch("https://8a00e218-fd3a-4724-a7ee-0b8823ab0eae-00-zjz10cajkzn2.riker.replit.dev/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText })
  });
  const data = await res.json();
  const pAI = document.createElement('p');
  pAI.textContent = "AI: " + data.reply;
  chatOutput.appendChild(pAI);

  userInput.value = "";
  chatOutput.scrollTop = chatOutput.scrollHeight;
});
