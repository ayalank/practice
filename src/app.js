var submitButtonRight = document.querySelector('#submit-right');

function addMessageToBoardRight() {
  var messageInputElemRight = document.querySelector('#message-input-right');
  var boardElemRight = document.querySelector('.content-right');
  var msgRight = messageInputElemRight.value;
  messageInputElemRight.value = '';
  boardElemRight.innerHTML = boardElemRight.innerHTML + '<p>' + msgRight +
    '</p>';
}

submitButtonRight.addEventListener('click', addMessageToBoardRight);

var submitButtonLeft = document.querySelector('#submit-left');

function addMessageToBoardLeft() {
  var messageInputElemLeft = document.querySelector('#message-input-left');
  var boardElemLeft = document.querySelector('.content-left');
  var msgLeft = messageInputElemLeft.value;
  messageInputElemLeft.value = '';
  boardElemLeft.innerHTML = boardElemLeft.innerHTML + '<p>' + msgLeft + '</p>';
}

submitButtonLeft.addEventListener('click', addMessageToBoardLeft);
