var elForm = document.querySelector('.form');

var elInput1 = document.querySelector('.input1');
var elInput2 = document.querySelector('.input2');

var elBtn = document.querySelector('.btn')

var elNatija = document.querySelector('.natija')

elForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(elInput1.value == "" && elInput2.value == ""){
        elInput1.value == ''
    }
    else if(elInput1.value == elInput1.value.toUpperCase()){
        elNatija.textContent = 'Iltimos faqat kichik xarf kiriting'
    }else if (elInput1.value == elInput1.value.toUpperCase()){
        elNatija.textContent = 'Iltimos faqat kichik xarf kiriting'
    }

    elInput1.value = ''
})