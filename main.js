let input = document.querySelector("[name='answer']");

let numeros = num => input.value += num;
let operador = operador => input.value += operador;
let borrar = () => input.value = null;
let borrarUno = () => input.value = input.value.slice(0, -1);
let calcular = () => input.value = eval(input.value);

let quitar = ()=>{
    navigator.clipboard.writeText(input.value);
    input.select();
    input.setSelectionRange(0, 99999);
    input.blur();
}
