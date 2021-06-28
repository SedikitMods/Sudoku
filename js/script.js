var btn = document.querySelector('.btn');
var input = document.querySelectorAll('input');
var sudoku = [];

function checkLength(elem) {
    if (elem.value.length > 1) {
        elem.value = elem.value.slice(0, 1);
    }
}

btn.addEventListener('click', () => {
    for(let i = 0; i < input.length; i++){
        sudoku[i] = input[i].value;
        if(input[i].value == ""){
            input[i].placeholder = "0";
        }
    }
    strokeFind(sudoku);
});

function strokeFind(list) {
    for(let j = 0; j < 81; j += 9) {
        let stroke = [];
        for(let i = 0; i < 9; i++) {
            if(list[j+i] != "") {
                stroke.push(list[j+i]);
            } else {
                stroke.push("a");
            }
        }

        let need =  [].concat(stroke);
        need.sort();
        if (need[need.length - 2] != "a") {
            for(let k = 0; k < 9; k++) {
                if(need[k] != String(k+1)) {
                    sudoku[j+stroke.indexOf("a")] = String(k+1);
                    input[j+stroke.indexOf("a")].value = String(k+1);
                }
            }
        }
    }
}