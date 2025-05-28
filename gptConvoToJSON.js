// Select all <article> elements with the exact class
const conversationElements = document.querySelectorAll('article.text-token-text-primary.w-full');

// Extract text content into an array of messages
const messages = Array.from(conversationElements).map((el, index) => ({
    id: index + 1,
    content: el.innerText.trim()
}));

// Convert to JSON
const jsonContent = JSON.stringify(messages, null, 2);

// Create and trigger the download
const blob = new Blob([jsonContent], { type: "application/json" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "gpt_conversation.json";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
