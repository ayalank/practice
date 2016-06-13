var submitButton = document.querySelector('#submit');

function addMessageToBoard() {
  var messageInputElem = document.querySelector('#message-input');
  var boardElem = document.querySelector('.content');
  var msg = messageInputElem.value;
  messageInputElem.value = '';
  boardElem.innerHTML = boardElem.innerHTML + '<p>' + msg + '</p>';
}

submitButton.addEventListener('click', addMessageToBoard);
