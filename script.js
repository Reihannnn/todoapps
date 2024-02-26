document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const addButton = document.getElementById("addButton");
  const taskListLiBarunya = document.getElementById("taskList");

  addButton.addEventListener("click", function () {
    const taskTest = inputText.value.trim();

    if (taskTest !== "") {
      const liBaru = document.createElement("li");
      liBaru.innerHTML = `
      ${taskTest}
      <button id = "deleteButton" class = "deleteButton">delete</button>
      `;
      taskListLiBarunya.appendChild(liBaru);

      liBaru
        .querySelector(".deleteButton")
        .addEventListener("click", function () {
          liBaru.remove();
        });

      console.log(taskListLiBarunya);
    } else {
      alert("masukan inputnya");
    }
  });
});
