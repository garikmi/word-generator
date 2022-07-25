words = getWords()

document.getElementById("quantity").value = 3;
document.getElementById("quantity").max = words.length;

var currentWords = []

function getQuantity() {
  quantity = parseInt(document.getElementById("quantity").value, 10)
  if (quantity < 1) {
    quantity = 1
  }
  if (quantity > words.length) {
    quantity = words.length
  }
  return quantity
}

function copy() {
  string = ""
  for (let i = 0; i < currentWords.length; i++) {
    string += i < currentWords.length-1 ? (currentWords[i] + " ") : (currentWords[i])
  }
  navigator.clipboard.writeText(string);
}

function displayWords() {
  string = ""
  length = currentWords.length > 100 ? 100 : currentWords.length
  for (let i = 0; i < length; i++) {
    string += i < currentWords.length-1 ? (currentWords[i] + " ") : (currentWords[i])
  }
  if (currentWords.length > 100) {
    string += " + " + (currentWords.length - 100) + " more"
  }
  document.getElementById("words").innerHTML = string
}
 
function generateWords() {
  words = getWords()
  currentWords = []
  len = getQuantity()
  for (let i = 0; i < len; i++) {
    currentWords.push(words.splice(Math.floor(Math.random()*words.length), 1))
  }
  displayWords()
}

