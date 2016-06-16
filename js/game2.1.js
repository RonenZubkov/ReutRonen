'use strict';

var gBoard;
var gLevels = [
            {
                levelId: 0,
                boardSize: 20
            }
]
var gState = {
    currRow: 0,
    indexOfHidingNums: 0,
    dragged: 0,
    target: 0,
    
}

function initGame21() {
    gBoard = buildBoard(gLevels.boardSize);
    console.table(gBoard);
    renderBoard(gBoard, '.row')
    // gState.indexOfHidingNums = hideRandomNum(gState.currRow);
    // renderTheHiddens(gState.currRow, gState.indexOfHidingNums);
    // checkStageComplited();
}

function buildBoard (SIZE) {
//   var SIZE = 6;  
  var board = [];
    for (var i = 0; i < SIZE; i++) {
        // for (var j = 0; j < SIZE; j++) {
        //     board[i][j] = j++
        // }
        board[i] = i;
        board.push(i);
        
    }
    return board;
}

// function renderBoard(board) {
    function renderBoard(board, selector) {
  var elContainer = document.querySelector(selector);

    var strHTMLs = board.map(function (chal) {
        var strHtml = '<div class="cell">' + 1 + '</div>'
        return strHtml;
    })

    elContainer.innerHTML = strHTMLs.join('');
}
// }

    


function hideRandomNum(currRow) {
    var indexOfHidingNumsByRow = [[4,7], [3, 8]];
    console.log(currRow)
    console.log('indexOfHidingNums.row0[i]',indexOfHidingNumsByRow[currRow])
    for (var i = 0; i < indexOfHidingNumsByRow.length; i++) {
        var elCell = document.querySelector('.td_'+currRow+'_'+indexOfHidingNumsByRow[currRow][i]);
        console.log(elCell)
        elCell.style.color = 'white';
   }
   return indexOfHidingNumsByRow[currRow];
}

function renderTheHiddens(currRow, numsIndex) {
    
    //map?
    var strHtml = '';
    for (var i = 0; i < numsIndex.length; i++) {
        strHtml += '<div id="'+i+'" draggable="true" ondragstart="drag(event)" class="drag num_' + i + '">' + gBoard[currRow][numsIndex[i]] + '</div>'
    }
      var elContainer = document.querySelector('.theHiddensContainer');
        elContainer.innerHTML = strHtml;
}


function allowDrop(ev) {
    ev.preventDefault();
    gState.target = ev.target.innerText
    console.log('gState.target', gState.target);
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    gState.dragged = ev.target.innerHTML
    console.log(ev.target.innerHTML)
}

function drop(ev) {
    // console.log('dropping');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (gState.dragged === gState.target) {
        console.log(gState.dragged,  gState.target)
    ev.target.appendChild(document.getElementById(data));
    ev.target.style.color = 'black';
    checkStageComplited()
    }
    
}


function checkStageComplited() {
      var elContainer = document.querySelector('.theHiddensContainer');    
      console.log(elContainer)
    if (elContainer.innerHTML === '') {
    console.log('!')
    gState.currRow++;
    var elRow = document.querySelector('.tr_'+gState.currRow)
    elRow.style.visibility = 'visible'
    initGame2()
    }
    
}
    





