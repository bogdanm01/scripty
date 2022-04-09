const fileUpload = 'submitFile';
const submitBtn = document.getElementById('submitBtn');

/*submitBtn.addEventListener('click', () => {
    fetch('/textinput', {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ "data": document.getElementById('plaintext').value })
    }).then(data => data.json()).then(data => {document.getElementById('result').innerHTML = data.summary;});
});
*/

const submitFile = document.getElementById('submitFile');

submitFile.addEventListener('click', () => {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('username', 'abc123');
    console.log(fileField.files[0]);
    formData.append('avatar', fileField.files[0]);
    fetch('/file', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
      
     console.log('Done');
});