const converter = new showdown.Converter({
  tables: true,
  tasklists: true,
  strikethrough: true,
  emoji: true,
});

const pad = document.getElementById("pad");
const markdownArea = document.getElementById("markdown");
const lineColIndicator = document.getElementById("line-col");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");
const saveBtn = document.getElementById("save-btn");
const openBtn = document.getElementById("open-btn");

// Update the preview and status indicators
function updatePreview() {
  // Update markdown preview
  markdownArea.innerHTML = converter.makeHtml(pad.value);

  // Update character count
  const chars = pad.value.length;
  charCount.textContent = `${chars} chars`;

  // Update word count
  const words =
    pad.value.trim() === "" ? 0 : pad.value.trim().split(/\s+/).length;
  wordCount.textContent = `${words} words`;

  // Update cursor position
  updateCursorPosition();
}

// Track cursor position
function updateCursorPosition() {
  const text = pad.value.substring(0, pad.selectionStart);
  const lines = text.split("\n");
  const lineNumber = lines.length;
  const colNumber = lines[lines.length - 1].length;

  lineColIndicator.textContent = `Line ${lineNumber}  Col ${colNumber}`;
}

// Apply markdown formatting to selected text
function applyMarkdown(startTag, endTag = "") {
  const start = pad.selectionStart;
  const end = pad.selectionEnd;
  const selectedText = pad.value.substring(start, end);
  const beforeText = pad.value.substring(0, start);
  const afterText = pad.value.substring(end);

  // If text is selected, wrap it with tags
  if (start !== end) {
    pad.value = `${beforeText}${startTag}${selectedText}${endTag}${afterText}`;
    pad.selectionStart = start + startTag.length;
    pad.selectionEnd = start + startTag.length + selectedText.length;
  } else {
    // If no text is selected, insert tags and place cursor in between
    pad.value = `${beforeText}${startTag}${endTag}${afterText}`;
    pad.selectionStart = start + startTag.length;
    pad.selectionEnd = start + startTag.length;
  }

  pad.focus();
  updatePreview();
}

// Event listeners
pad.addEventListener("input", updatePreview);
pad.addEventListener("click", updateCursorPosition);
pad.addEventListener("keyup", updateCursorPosition);

// Save functionality
saveBtn.addEventListener("click", function () {
  const text = pad.value;
  const blob = new Blob([text], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "document.md";
  a.click();

  URL.revokeObjectURL(url);
});

// Open functionality
openBtn.addEventListener("click", function () {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".md, .markdown, .txt";

  input.onchange = function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      pad.value = e.target.result;
      updatePreview();
    };

    reader.readAsText(file);
  };

  input.click();
});

// Initialize
window.onload = function () {
  updatePreview();
};
