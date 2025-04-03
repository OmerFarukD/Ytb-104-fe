const tumPler = document.querySelectorAll("p");

const bgChanger = document.getElementById("bg-changer")
const  cntChanger = document.getElementById("cnt-changer")
let  contentState = false;

let cssChanger = true;

bgChanger.addEventListener("click",function (){
    cssChanger = !cssChanger;
    console.log(cssChanger);

    if (!cssChanger){
        for (let p of tumPler){
            p.style.backgroundColor = "red"
            p.style.color = "yellow"
        }
    }else {
        for (let p of tumPler){
            p.style.backgroundColor = "yellow"
            p.style.color = "red"
        }
    }
});
cntChanger.addEventListener("click",function (){

    contentState = !contentState;

    for (let p of tumPler)
    {
        p.innerText = "İçerik değişti"
    }

    if (contentState){
        console.log(contentState)
        cntChanger.textContent = "İçerik Değişti butonu"
    }
})


