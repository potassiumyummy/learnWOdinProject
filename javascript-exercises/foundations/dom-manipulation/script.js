// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const para = document.createElement("p");
para.textContent = "Hey! I'm red!";
para.setAttribute("style", "color: red;");
container.appendChild(para);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.setAttribute("style", "color: blue;");
container.appendChild(header3);

const newDiv = document.createElement("div");
newDiv.classList.add("divNew");
newDiv.setAttribute("style", "border: 1px solid black; background-color: pink;");

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

newDiv.appendChild(header1);
newDiv.appendChild(para2);
container.appendChild(newDiv);