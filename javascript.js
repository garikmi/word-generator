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

function displayWords() {
  string = ""
  for (let i = 0; i < currentWords.length; i++) {
    string += i < currentWords.length-1 ? (currentWords[i] + " ") : (currentWords[i])
  }
  document.getElementById("words").innerHTML = string
}
 
function generateWords() {
  currentWords = []

  for (let i = 0; i < getQuantity(); i++) {
    currentWords.push(words[Math.floor(Math.random()*words.length)]);
  }
  displayWords()
}

