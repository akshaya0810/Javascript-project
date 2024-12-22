function countWords() {
    let text = document.getElementById("textInput").value.trim();
    let wordCount = text === '' ? 0 : text.split(/\s+/).length;  // Splits by space or multiple spaces
    document.getElementById("wordCount").textContent = wordCount;
}
