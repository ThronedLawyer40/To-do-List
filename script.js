const inputBox = document.querySelector(".input-box")
const listContainer = document.querySelector("#list-container")

function addTask() {
    if (inputBox.value === "") {
      alert("You must write something!")
    }  
    if (inputBox.value !== ""){
      let tarefa = document.createElement("li")
      listContainer.appendChild(tarefa)

      let textoTarefa = document.createElement("p")
      textoTarefa.textContent = inputBox.value
      tarefa.appendChild(textoTarefa)
      textoTarefa.classList.add("pc")

      let button = document.createElement("span")
      button.innerHTML = "X"
      tarefa.appendChild(button)

      tarefa.addEventListener("click", 
      function (delet){
      if (delet.target.tagName === "SPAN") {
      delet.target.parentElement.remove()
      }

})
    }

}

listContainer.addEventListener("click", function (check) {
  if (check.target.tagName === "LI") {
     check.target.classList.toggle("checked");
  }
});


