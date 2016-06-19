var submitButtonRight = document.querySelector('#submit-right');

function addMessageToBoardRight() {
  var messageInputElemRight = document.querySelector('#message-input-right');
  var msgRight = messageInputElemRight.value;
  messageInputElemRight.value = '';
  addMessageToBoard(msgRight, "content-right")

}

submitButtonRight.addEventListener('click', addMessageToBoardRight);

var submitButtonLeft = document.querySelector('#submit-left');

function addMessageToBoardLeft() {
  var messageInputElemLeft = document.querySelector('#message-input-left');
  var msgLeft = messageInputElemLeft.value;
  messageInputElemLeft.value = '';
  addMessageToBoard(msgLeft, "content-left")
}

submitButtonLeft.addEventListener('click', addMessageToBoardLeft);

function addMessageToBoard(msg, className) {
  var boardElem = document.querySelector('.message-board');
  boardElem.innerHTML = boardElem.innerHTML + '<p class="' + className + ' message" >' +
    msg + '</p>';

}
