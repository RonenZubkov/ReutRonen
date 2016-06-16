'use strict';

var gBoard;
var gLevels = [
            {
                levelId: 0,
                boardSize: 10,
                numsToHide: [4,7],
            }
]
var gState = {
    currLevel: 0,
    // indexOfHidingNums: 0,
    // dragged: 0,
    // target: 0,
}

function initGame2() {
    gBoard = buildBoard(gLevels[gState.currLevel].boardSize);
    console.table(gBoard);
    renderBoard(gBoard, '.row')
    hideNum();
    renderTheHiddens();
    // checkStageComplited();
}

function buildBoard (SIZE) {
  var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push(i);
        console.log(board)
    }
    return board;
}

// function renderBoard(board) {
    function renderBoard(board, selector) {
  var elContainer = document.querySelector(selector);

    var strHTMLs = board.map(function (chal, i) {
        var strHtml = '<div id="div'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)" class="cell cell_'+i+'">' + i + '</div>'
        return strHtml;
    })

    elContainer.innerHTML = strHTMLs.join('');
}

function hideNum() {
    var indexOfHidingNumsByRow = gLevels[gState.currLevel].numsToHide;
    console.log(indexOfHidingNumsByRow)
    for (var i = 0; i < indexOfHidingNumsByRow.length; i++) {
        console.log(indexOfHidingNumsByRow[i])
        var elCell = document.querySelector('.cell_'+indexOfHidingNumsByRow[i]);      
        elCell.style.color = 'white';
        console.log(elCell)
   }
//    return indexOfHidingNumsByRow[currRow];
}

function renderTheHiddens() {
    
    //map?
    var strHtml = '';
    for (var i = 0; i < gLevels[gState.currLevel].numsToHide.length; i++) {
        console.log(gLevels[gState.currLevel].numsToHide[i])
        strHtml += '<div id="'+i+'" draggable="true" ondragstart="drag(event)" class="drag num_' + i + '">' + gBoard[gLevels[gState.currLevel].numsToHide[i]] + '</div>'
    }
      var elContainer = document.querySelector('.theHiddensContainer');
        elContainer.innerHTML = strHtml;
}


function allowDrop(ev) {
    ev.preventDefault();
    gState.target = ev.target.innerText
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    gState.dragged = ev.target.innerHTML;
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (gState.dragged === gState.target) {
    console.log(gState.dragged, gState.target)
    ev.target.replaceChild(document.getElementById(data), document.getElementById(ev.dataTransfer.getData("text")));
    ev.target.style.color = 'black';
    var elContainer = document.querySelector('.theHiddensContainer');        
    var elHidden = document.getElementById(data)
    console.log('elHidden', elHidden)
    elContainer.removeChild(elHidden);
    checkStageComplited()
    }
    
}


function checkStageComplited() {
      var elContainer = document.querySelector('.theHiddensContainer');    
      console.log(elContainer)
    if (elContainer.innerHTML === '') {
    console.log('!')
    gState.currLevel++;
    var elBottun = document.querySelector('.buttonContainer');
    elBottun.style.display = 'block'
    // initGame2()
    }
    
}
    





