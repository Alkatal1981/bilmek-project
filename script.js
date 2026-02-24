const res = await fetch("https://8a00e218-fd3a-4724-a7ee-0b8823ab0eae-00-zjz10cajkzn2.riker.replit.dev/ai", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userText })
});
