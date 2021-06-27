var btn = document.querySelector('.btn');
var input = document.querySelectorAll('input');
sudoku = [];

function checkLength(elem) {
    if (elem.value.length > 1) {
        elem.value = elem.value.slice(0, 1);
    }
}

btn.addEventListener('click', () => {
    for (let i = 0; i < input.length; i++){
        sudoku[i] = input[i].value;
        if(input[i].value == ""){
            input[i].placeholder = "0";
        }
    }
    document.querySelector('.out').innerHTML = sudoku.join(' / ');
});