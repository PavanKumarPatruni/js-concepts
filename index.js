// index.js

import { incrementByOne } from "./increment";

var count = 0;

function increment() {
  count = incrementByOne(count);
  document.getElementById("count").textContent = count;
}

document.getElementById("counter").addEventListener("click", increment);
