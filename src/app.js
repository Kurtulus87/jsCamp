console.log("Merhaba Dünya");
//JS type safe değildir
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10 // Local içersindeki tanımlanan değişken ile global alndaki değişken birbirine karışmaz
}

const euroDun = 11.2
//euroDun = 11.1 // const sadece bir kez tanımlanır daha sonradan değişmez

console.log(euroDun)

//array

let konutKredileri = ["Konut Kredisi" , "Emlak Konut Kredisi" , "Kamu Konut kredisi"]

for (let i = 0; i < konutKredileri.length; i++) {
    console.log(konutKredileri[i]);
  
 }

