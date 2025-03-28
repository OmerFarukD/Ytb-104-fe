
const  text = "Hello, World! Karşılığı Merhaba Dünya"

console.log("Text in uzunluğu" , text.length)


const  name = "Buse "
const  surname = "Doğan"

const birlestirilmis = name.concat(surname)
console.log(birlestirilmis)

const email = "qubitomer@gmail.com";

if (email.endsWith("@gmail.com")) {
    console.log("Email geçerli")
}else{
    console.log("Email formatında değil")
}

const  msg = email.endsWith("@gmail.com") ? "Email geçerli" :"Email formatında değil"
console.log(msg)

const myFamily ="Buse,Ömer,Evren,Uzay";
const  result =myFamily.split(",");
console.log(result)







