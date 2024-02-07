
// alert('hii')

const form = document.querySelector('#mainWapper');
const input = document.querySelector('#input');
const barHeight = document.querySelector('.outPut')

form.addEventListener('submit' , (e) => {
     if(!input.value) alert('if you whant to Create BarCode Enter The Text In Input')

        e.preventDefault();
        JsBarcode("#barCode" , input.value);

        barHeight.classList.toggle('barHeight');
})  