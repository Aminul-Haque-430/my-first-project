fetch('/api/message')
  .then(res => res.json())
  .then(data => {
    document.getElementById('api-message').innerText = data.message;
  });