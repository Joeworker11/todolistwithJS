var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const displayTask = document.querySelector("#content");
const userInput = document.querySelector("#input");
var error = document.querySelector("#error");
const errorMessage = () => {
    let message = "Hiba! Ne hagyd üresen a mezőt!"
    error.style.color = "red";
    error.style.fontSize = "x-large";
    error.textContent = message;
    error.style.marginTop = "30px";
    error.style.marginLeft = "45%";
    error.style.justifyContent = "center";
    error.style.alignItems = "center";

}

const deleteMessage = () => {
    error.textContent = "";
}


const hozzaad = () => {
  const taskText = userInput.value;
  if (!taskText) {
    errorMessage();
    return;
  }
  deleteMessage();
  const taskListItem = document.createElement("li");
  taskListItem.textContent = taskText;

  const taskList = document.createElement("ul");
  taskList.appendChild(taskListItem);

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.appendChild(taskList);

  displayTask.appendChild(taskDiv);

  userInput.value = "";
};

const mindentTorol = () => {
  displayTask.innerHTML = "";
};

const elemEltavolit = () => {
  // remove last task div
  const taskDivs = document.querySelectorAll(".task");
  if (taskDivs.length > 0) {
    const lastTaskDiv = taskDivs[taskDivs.length - 1];
    lastTaskDiv.remove();
  }
};

const szerkeszt = () => {
  // TODO: implement edit function
};

const handleKeyEnter = (event) => {
    if(event.key === "Enter") {
        hozzaad();
    }
    return;
}

const handleKeyDelete = (event) => {
    if(event.key ==="Delete") {
        mindentTorol();
    }
}

//var allOfLi = querySelectorAll('li::marker');


const listaLetoltese = () => {
  const link = document.createElement("a");
 
//displayTask.textContent
// Select all the li elements in the DOM tree
const liElements = document.querySelectorAll('ul');

// Create an empty array to hold the li elements' text content
const liTextArray = [];

// Loop through each li element and push its textContent property into the array
liElements.forEach(li => {
  liTextArray.push(li.textContent);
});

var stringLiEl = liTextArray.map(el => "-" + el + "\n\n");


var resultLiElements = stringLiEl.join("");

console.log(liTextArray); // Output: ["item 1", "item 2", "item 3"]
  const file = new Blob([resultLiElements], { type: 'text/plain' });
 
  link.href = URL.createObjectURL(file);
  link.download = `teendőkAMaiNapra${date}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
};

document.querySelector("#addBtn").addEventListener("click", hozzaad);
document.querySelector("#deleteBtn").addEventListener("click", mindentTorol);
document.querySelector("#editBtn").addEventListener("click", szerkeszt);
document.querySelector("#removeBtn").addEventListener("click", elemEltavolit);
document.querySelector("#saveBtn").addEventListener("click", listaLetoltese);

userInput.addEventListener('keydown', handleKeyEnter);
document.addEventListener('keydown', handleKeyDelete);


