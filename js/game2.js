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
}

function initGame2() {
    // checking in local storage if isSolved: 
    gChals = getChals(); 
    
    
      
    gBoard = buildBoard(gLevels[gState.currLevel].boardSize);
    console.table(gBoard);
    renderBoard(gBoard, '.row')
    hideNum();
    renderTheHiddens();
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
        var strHtml = '<div id="droppable" class="droppable cell cell_' + i + '" data-type="'+i+'">' + i + '</div>'
        // " ondrop="drop(event)" ondragover="allowDrop(event)" 
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
        strHtml += '<div id="draggable" class="draggable drag num_' + i + '" data-type="'+i+'">' + gBoard[gLevels[gState.currLevel].numsToHide[i]] + '</div>'
        // +'draggable="true" ondragstart="drag(event)"'        
    }
      var elContainer = document.querySelector('.theHiddensContainer');
        elContainer.innerHTML = strHtml;
        $('.draggable').draggable({ revert:true })
        $('.droppable').droppable(
            { accept: '.cell' }
        );     
}



// function allowDrop(ev) {
//     ev.preventDefault();
//     gState.target = ev.target.innerText
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//     gState.dragged = ev.target.innerHTML;
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     if (gState.dragged === gState.target) {
//     console.log(gState.dragged, gState.target)
//     ev.target.replaceChild(document.getElementById(data), document.getElementById(ev.dataTransfer.getData("text")));
//     ev.target.style.color = 'black';
//     var elContainer = document.querySelector('.theHiddensContainer');        
//     var elHidden = document.getElementById(data)
//     console.log('elHidden', elHidden)
//     elContainer.removeChild(elHidden);
//     checkStageComplited()
//     }
    
// }


function checkStageComplited() {
    var elContainer = document.querySelector('.theHiddensContainer');    
    // console.log(elContainer)
    if (elContainer.innerHTML === '') {
        console.log('!')
        gState.currLevel++;
        var elBottun = document.querySelector('.buttonContainer');
        elBottun.style.display = 'block'
    // initGame2()
    }
    
}
    





