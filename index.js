// index.js

var count = 0;

function increment() {
  count = incrementByOne(count);
  document.getElementById("count").textContent = count;
}
