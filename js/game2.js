'use strict';

var gBoard;
var gState = {
    currRow: 0,
}

function initGame2() {
    gBoard = buildBoard();
    console.table(gBoard);
    var ranNums = hideRandomNum(gState.currRow, 2);
    renderTheHiddens(gState.currRow, ranNums);
    
}

function buildBoard () {
  var SIZE = 10;  
  var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = (j + 1) + (10 * i)
        }
    }
    return board;
}

function hideRandomNum(row, amount) {
    var ranNums = [];
    for (var i = 0; i < amount; i++) {
        var ranNum = parseInt(Math.random() * 10);
        ranNums.push(ranNum);
        console.log('ranNums', ranNums);
    }
    for (var i = 0; i < ranNums.length; i++) {
        //updating the model:
    //    gBoard[row][ranNums[i]] = null;
        //updating the DOM:
        var elCell = document.querySelector('.td_'+row+'_'+ranNums[i]);
        elCell.addEventListener("drop_handler(event)", ondrop, false)
        elCell.style.color = 'white';
        console.log(elCell);
        
   }

   return ranNums;
    
}

function renderTheHiddens(row, ranNums) {
    
    var strHtml = '';
    for (var i = 0; i < ranNums.length; i++) {
        strHtml += '<div draggable="true" ondragstart="dragstart_handler(event);" class="num num_' + i + '">' + gBoard[row][ranNums[i]] + '</div>'
    }

      var elContainer = document.querySelector('.theHiddensContainer');
        elContainer.innerHTML = strHtml;
}

function dragstart_handler(event) {
    console.log(event);
    event.dataTransfer.setData('text/html', 'gBoard[row][ranNums[i]]');
    
}


function drop_handler(event) {
    event.preventDefault();
    console.log('drop_handler(event)');
    
}




