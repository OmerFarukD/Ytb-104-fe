const title1 = document.querySelector('#title')
const date = document.querySelector('#day')
const control = document.querySelector('#control')
const addedButton = document.querySelector('#add-button')

const  tbody = document.getElementById('table-body')


let titleDeger = ""
let dateDeger = ""
let controlDeger = ""



addedButton.addEventListener('click', () => {

    titleDeger = title1.value
    dateDeger = date.value
    controlDeger = control.value


    if (titleDeger ==="") {
        alert("Başlık alanı zorunludur.")
    }else{
        tbody.innerHTML += `
     <tr>
       
            <td>${titleDeger}</td>
            <td>${dateDeger}</td>
            <td>${controlDeger}</td>
        </tr>
    `


        title1.value = ""
        date.value = ""
        control.value = ""
    }


})





