const textInput = document.getElementById('textInput');
const textToSummarize = textInput.value;
const sentencesCount = document.getElementById('sentencesCount').value;

document.getElementById('summarize-btn').addEventListener("click", function () {
  fetch('/summarizeText', {
    body: JSON.stringify({data: document.getElementById('textInput').value, 
                          numberOfSentences: document.getElementById('sentencesCount').value }), 
                          method: 'post'
  }).then(data => data.json()
  .then(data => {
    textInput.innerHTML = data;
  }))
});