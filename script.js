const form = document.getElementById("new-todo-form")
const content = document.getElementById("content");
const priority = document.getElementById("priority");
const listContainer = document.getElementById("list-container");


// const btn = document.getElementById("add-button");
// btn.addEventListener('click', function () {
//   if (content.value === '') {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = content.value;
//     listContainer.appendChild(li);
//   }
//   content.value = "";
// })

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (content.value === '') {
    alert("You must write something!");
  } else if (priority.value === 'select') {
    alert("Please select a priority!")
  } else {
    let li = document.createElement("li");
    li.className = "checked"

    li.innerHTML = `
    <div style="flex: 4;">
            <span class="task-name">${content.value}</span>
            <div class="tag ${priority.value.toLowerCase()}">
              ${priority.value}
            </div>
          </div>

          <div class="done">
            <img onclick="removeTask(event)" style="cursor:pointer;" src="checked.PNG" width="40px" height="40px" />
          </div>
        `
    listContainer.appendChild(li);
    form.reset()
  }
})

function removeTask(event) {
  const listItem = event.target.closest('li');
  listItem.remove();
}






// const addTask = document.createElement('li');
// addTask.classList.add();
// addTask.innerText(content.value && prioritySelect.value);
// console.log(addTask);

