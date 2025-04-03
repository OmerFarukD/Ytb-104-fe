const  tumPler = document.querySelectorAll("p")
const  tumHler = document.querySelectorAll("h2")


const  baslik3 = document.querySelector("#baslik3")


const  baslik2 = document.getElementById("baslik2");
const  classlar = document.getElementsByClassName("class1");
const pler = document.getElementsByTagName("p")


const class1 = document.querySelectorAll(".class1")
for (let p of tumPler){
    console.log(p.innerText)
}


tumHler.forEach((eleman, index)=> {
    console.log(`${index+1}. başlık : ${eleman.innerText}`)}
)


class1.forEach((eleman, index)=> {
    console.log(eleman.innerHTML)
})

console.log(baslik3.textContent)
