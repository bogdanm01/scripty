const textInput = document.getElementById('textInput');
const textToSummarize = textInput.value;
const sentencesCount = document.getElementById('sentencesCount').value;

document.getElementById('summarize-btn').addEventListener("click", function () {
  fetch('/summarizeText', {
    body: JSON.stringify(
      {data: document.getElementById('textInput').value, 
       range: document.getElementById('sentencesCount').value 
      }), 
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(data => data.json())
  .then(data => {
    console.log(data.data);
    document.getElementById('textInput').value = data.data;
  })
});