const expression = document.getElementById('expression')
const main = document.getElementById("container")
const root = document.querySelector(":root")
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.getElementById("copy").addEventListener("click", function (ev) {
   const button = ev.currentTarget
   if (button.innerText === "Copy") {
     button.innerText = "Copied!"
     button.classList.add("success")
     navigator.clipboard.writeText(resultInput.value)
   } else {
     button.innerText = "Copy"
     button.classList.remove("success")
   }
 })

function calculate(){
   resultInput.value = "ERROR"
   resultInput.classList.add("error")
   const result = eval(expression.value)  
   resultInput.value = result
   resultInput.classList.remove("error")
}

document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
   charKeyBtn.addEventListener("click", function(){
      const value = charKeyBtn.dataset.value
      expression.value += value
      return
   })
})

expression.addEventListener("keydown", function(ev){
   ev.preventDefault()
   if(allowedKeys.includes(ev.key)){
      expression.value += ev.key
      return
   }
   if(ev.key==='Backspace'){
      expression.value = expression.value.slice(0,-1)
   }
   if(ev.key === 'Enter'){
      calculate()
   }
})

document.getElementById('clear').addEventListener("click", function(){
   expression.value = " "
   expression.focus()
})
document.getElementById('equal').addEventListener("click", calculate)

document.getElementById("theme").addEventListener("click", function () {
   if (main.dataset.theme === "dark") {
     root.style.setProperty("--bg-color", "#ffffff")
     root.style.setProperty("--border-color", "#aaa")
     root.style.setProperty("--font-color", "#000000")
     root.style.setProperty("--primary-color", "#30aa10")
     main.dataset.theme = "light"
   } else {
     root.style.setProperty("--bg-color", "#1d1e21")
     root.style.setProperty("--border-color", "#666")
     root.style.setProperty("--font-color", "#f1f5f9")
     root.style.setProperty("--primary-color", "#4dff91")
     main.dataset.theme = "dark"
   }
 })

