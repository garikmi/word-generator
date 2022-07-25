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
 
function generateWords() {
  currentWords = []

  for (let i = 0; i < getQuantity(); i++) {
    currentWords.push(words[Math.floor(Math.random()*words.length)]);
  }
  console.log(currentWords)
  displayWords()
}

function displayWords() {
  string = ""
  for (let i = 0; i < currentWords.length; i++) {
    string += currentWords[i] + " "
  }
  document.getElementById("words").innerHTML = string
}

