// retrieving items from local storage
const storedTasks = JSON.parse(localStorage.getItem("tasks"));

let list = document.getElementById("items");

function handleDisplayTasks(event) {
  event.preventDefault();

  if (storedTasks) {

    for (let i = 0; i < storedTasks.length; i++) {
      // Create checkbox
      let item = document.createElement('input');
      item.type = 'checkbox';
      item.value = storedTasks[i];
      item.id = "task-" + i;

      // Create label
      let label = document.createElement('label');
      label.textContent = storedTasks[i];
      label.htmlFor = "task-" + i;

      // Create "Mark as Completed" button
      let completeBtn = document.createElement('button');
      completeBtn.textContent = "Mark as Completed";
      completeBtn.className = "complete-btn";
      completeBtn.style.marginBottom = "20px"
      completeBtn.onclick = function () {
        if (item.checked) {
          label.style.textDecoration = "line-through";
        } else {
          alert("Please check the task before marking as completed.");
        }
      };

      // Create "Remove" button
      let removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = function () {
        item.remove();
        label.remove();
        completeBtn.remove();
        removeBtn.remove();
        br.remove();
      };

      // Line break
      let br = document.createElement('br');

      // Append everything
      list.appendChild(item);
      list.appendChild(label);
      list.appendChild(completeBtn);
      list.appendChild(removeBtn);
      list.appendChild(br);
    }
  } else {
    console.log("No tasks found in localStorage.");
  }
}