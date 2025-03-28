// List<int> sayilar = new List<int>();

// mern Stack developer - Mongo express react node js
const  sayilar = [10,11,"Merhabalar"]
for (let i =0; i<11;i++){
    sayilar.push(i)
}
console.log(sayilar)

selamVer("Ömer",sayilar)


// function
function selamVer(isim,soyisim){
    console.log("Merhaba ",isim," ",soyisim)
}

const selamVer1 = function (isim,soyisim){
    console.log("Merhaba ",isim," ",soyisim)
}

selamVer1("Buse","Doğan")

const topla = (sayi1,sayi2)=>{
    return sayi1 + sayi2
}

console.log(topla(25,37))
console.log("Github a yansı")