var btn = document.querySelector('.btn');
var input = document.querySelectorAll('input');
var sudoku = [];

function checkLength(elem) {
    if (elem.value.length > 1) {
        elem.value = elem.value.slice(-1, 1);
    }
}

btn.addEventListener('click', () => {
    for(let i = 0; i < input.length; i++){
        sudoku[i] = input[i].value;
        if(input[i].value == "") {
            input[i].placeholder = "0";
        }
    }
    strokeFind(sudoku);
    columnFind(sudoku);
    squareFind(squareCreate(sudoku));
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

        let need = [].concat(stroke);
        need.sort();
        if (need[7] != "a" && need[8] == "a") {
            for(let k = 0; k < 9; k++) {
                if(need[k] != String(k+1)) {
                    sudoku[j + stroke.indexOf("a")] = String(k+1);
                    input[j + stroke.indexOf("a")].value = String(k+1);
                    break;
                }
            }
        }
    }
}

function columnFind(list) {
    for(let i = 0; i < 9; i++) {
        let column = [];
        for(let j = 0; j < 81; j += 9) {
            if(list[j+i] != "") {
                column.push(list[j+i]);
            } else {
                column.push("a");
            }
        }

        let need = [].concat(column);
        need.sort();
        if (need[7] != "a" && need[8] == "a") {
            for(let k = 0; k < 9; k++) {
                if(need[k] != String(k+1)) {
                    sudoku[column.indexOf("a") * 9 + i] = String(k+1);
                    input[column.indexOf("a") * 9 + i].value = String(k+1);
                    break;
                }
            }
        }
    }
}

function squareCreate(list) {
    let separated = [];
    for (let n = 0; n < 21; n++) {
        let square = [];
        for (let m = 3 * n; m < 3 * n + 19; m += 9) {
            for(let i = 0; i < 3; i++) {
                square.push(list[m + i]);
            }
        }
        if ((n + 1) % 3 == 0) {
            n += 6;
        }
        separated.push(square);
    }
    return separated;
}

function squareFind(list) {
    for(let i = 0; i < 9; i++) {
        let need = [].concat(list[i]);
        need.sort();
        if (need[1] != "" && need[0] == "") {
            for(let k = 8; k >= 0; k--) {
                if(need[k] != String(k+1)) {
                    sudoku[(((list[i].indexOf("") - list[i].indexOf("") % 3) / 3) + (((i - i % 3) / 3) * 3)) * 9 + (((i * 3) % 9) + (list[i].indexOf("") % 3))] = String(k+1);
                    console.log(sudoku);
                    input[(((list[i].indexOf("") - list[i].indexOf("") % 3) / 3) + (((i - i % 3) / 3) * 3)) * 9 + (((i * 3) % 9) + (list[i].indexOf("") % 3))].value = String(k+1);
                    break;
                }
            }
        }
    }
}