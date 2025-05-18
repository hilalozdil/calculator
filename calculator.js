let sayi = Number(prompt('1. sayı giriniz'));
let digerSayi = Number(prompt('2. sayıyı giriniz'));

let islem = prompt('Yapmak istediğiniz işlem: \n 1) + \n 2) - \n 3) * \n 4) /');
let toplam = sayi + digerSayi;
let fark = sayi - digerSayi;
let carpim = sayi * digerSayi;
let bolum = sayi / digerSayi;

if (islem === '+'){
    console.log(`İşem sonucunuz ${toplam}'tur.`);
} else if (islem === '-'){
    console.log(`İşem sonucunuz ${fark}'tur.`);
} else if (islem === '*'){
    console.log(`İşem sonucunuz ${carpim}'tur.`);
} else {
    console.log(`İşem sonucunuz ${bolum}'tur.`);
}