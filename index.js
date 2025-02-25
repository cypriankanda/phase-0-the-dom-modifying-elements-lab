// Write your code here!

// Step 1: Remove the <main> element with id "main"
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id of the new element to "victory"
newHeader.id = "victory";

// Step 4: Set the text content to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// Step 5: Append the new element to the body
document.body.append(newHeader);

// Additional DOM Manipulation Demonstrations
// Create a new div and append it to body
const element = document.createElement("div");
document.body.append(element);

// Create an unordered list
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
element.append(ul);

// Modify the appearance of the new header
newHeader.style.color = "blue";
newHeader.style.textAlign = "center";
newHeader.style.fontSize = "36px";
newHeader.classList.add("victory-message");
