const inputBox = document.querySelector(".input-box")
const listContainer = document.querySelector("#list-container")

function addTask() {
    if (inputBox.value === "") {
      alert("You must write something!")
      return;
    }  

      let tarefa = document.createElement("li")
      tarefa.classList.add("lista")
      listContainer.appendChild(tarefa)

      let pDiv = document.createElement("div")
      tarefa.appendChild(pDiv)
      pDiv.classList.add("p-container")

      let textoTarefa = document.createElement("p")
      textoTarefa.textContent = inputBox.value
      pDiv.appendChild(textoTarefa)
      textoTarefa.classList.add("pc")

      let actions = document.createElement("div")
      tarefa.appendChild(actions)

      let edit = document.createElement("span")
      edit.innerHTML = "✏️"
      actions.appendChild(edit)
      edit.classList.add("edit-button")

      let button = document.createElement("span")
      button.innerHTML = "❌"
      actions.appendChild(button)
      button.classList.add("delete-button")

}

listContainer.addEventListener("click", 
      function (delet){

      const listP = delet.target.closest("li")
      const pList = document.querySelector(".pc")
      const closestContainer = delet.target.closest("li").querySelector(".p-container")

      if (delet.target.classList.contains("delete-button")) {
      listP.remove()
      }

      if (delet.target.classList.contains("edit-button")) {
        let inputEdit = document.createElement("input")
        inputEdit.value = pList.textContent
        closestContainer.appendChild(inputEdit)

        pList.remove()

      }

    
}

)

listContainer.addEventListener("click", function (check) {
  if (check.target.tagName === "LI") {
     check.target.classList.toggle("checked");
  }
});


