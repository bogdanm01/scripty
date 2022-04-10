const textInput = document.getElementById('textInput');
const textToSummarize = textInput.value;
const sentencesCount = document.getElementById('range').value;

document.getElementById('summarize-btn').addEventListener("click", function () {
  fetch('/summarizeText', {
    body: JSON.stringify(
      {data: document.getElementById('textInput').value, 
       range: document.getElementById('range').value 
      }), 
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(data => data.json())
  .then(data => {
    console.log(data.data);
    document.getElementById('textInput').value = data.data.trim();
  })
});

document.getElementById('clear-btn').addEventListener("click", function () {
  textInput.value = "";
})

document.getElementById('range').addEventListener('input', function () {
  document.getElementById('sentencesCountSpan').innerHTML = document.getElementById('range').value;
}, false);

document.getElementById('pdf-export-button').addEventListener('click', () => {
  console.log(document.getElementById('textInput').value);
  fetch('/textinput', {
    body: JSON.stringify(
      {data: document.getElementById('textInput').value, 
       range: document.getElementById('range').value 
      }), 
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    }
  });
  //.then(response => response.json()).then(data => console.log(data));

  
});