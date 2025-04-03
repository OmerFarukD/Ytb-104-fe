const myFamily = ["Buse Doğan","Uzay Doğan", "Sanal Doğan","Evren Doğan","İbrahim Doğan"]

const  list = document.querySelector(".list-group")


for (let person of myFamily) {
    list.innerHTML += `
      <li class="list-group-item">${person}</li>
    `


}
