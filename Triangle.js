//спосіб 1
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol;
        }
        console.log(line);
    }
}

// Задання розміру ялинки:
drawTriangle(10, '+');



//спосіб 2
function drawTriangle(height, symbol, row = 1) {
    if (row > height) {
        return;
    }
    
    let line = '';
    for (let i = 1; i <= row; i++) {
        line += symbol;
    }
    console.log(line);
    
    drawTriangle(height, symbol, row + 1);
}

// Задання розміру ялинки:
drawTriangle(7, '*');