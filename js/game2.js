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
        strHtml += '<div id="boxA" draggable="true" ondragstart="return dragStart(event)" class="drag num num_' + i + '">' + gBoard[row][ranNums[i]] + '</div>'
    }

      var elContainer = document.querySelector('.theHiddensContainer');
        elContainer.innerHTML = strHtml;
}

function dragStart(ev) {
   ev.dataTransfer.effectAllowed='move';
   ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
   ev.dataTransfer.setDragImage(ev.target,100,100);
   return true;
}
function dragEnter(ev) {
   event.preventDefault();
   return true;
}
function dragOver(ev) {
     event.preventDefault();
}
function dragDrop(ev) {
   var data = ev.dataTransfer.getData("Text");
   ev.target.appendChild(document.getElementById(data));
   ev.stopPropagation();
   return false;
   
}




