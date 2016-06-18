'use strict';

var gBoard;
var gLevels = [
                // **TODO: create more levels
            {   
                levelId: 0,
                boardSize: 14,
                // **TODO: create func that makes random numsToHide
                numsToHide: [4, 7, 12],
            }
]
var gState = {
    currLevel: 0,
    hiddensDragged: 0
}

function initGame2() {
    // **TODO: checking in local storage if gChals[1].isSolved  - and blocks the access tp this page       
    gBoard = buildBoard(gLevels[gState.currLevel].boardSize);
    console.table(gBoard);
    renderBoard(gBoard, '.row')
    hideNums();
    renderTheHiddens();
}

function buildBoard (size) {
  var board = [];
    for (var i = 0; i < size; i++) {
        board.push(i);
    }
    return board;
}


function renderBoard(board, selector) {
    var elContainer = document.querySelector(selector);
 
    var strHTMLs = board.map(function (chal, i) {
        var strHtml = '<div id="droppable_'+i+'" class="droppable droppable_'+i+' cell cell_' + i + '" data-type="'+i+'">' + i + '</div>'
        return strHtml;
        
    })
    
    elContainer.innerHTML = strHTMLs.join('');
}

function hideNums() {
    var numsToHide = gLevels[gState.currLevel].numsToHide;
    for (var i = 0; i < numsToHide.length; i++) {
        var elCell = document.querySelector('.cell_'+numsToHide[i]);  
        //TODO: create a class + clean innerText    
        elCell.style.color = 'antiquewhite';
   }
}

function renderTheHiddens() {
    
    // **TODO: map?
    var strHtml = '';
    for (var i = 0; i < gLevels[gState.currLevel].numsToHide.length; i++) {
        console.log(gLevels[gState.currLevel].numsToHide[i])
        strHtml += '<div class="draggable draggable_'+i+' drag num_' + i + '" data-type="'+i+'">' + gBoard[gLevels[gState.currLevel].numsToHide[i]] + '</div>'     
    }
    var elContainer = document.querySelector('.theHiddensContainer');
    elContainer.innerHTML = strHtml;
        
    $(function() {
        $('.draggable').draggable({
            revert: "invalid",
            start: function(event, ui) {
                $(this).fadeTo('fast', 0.5);
            },
            stop: function(event, ui) {
                $(this).fadeTo(0, 1);
            }
        });
       
        $('.droppable').droppable({
            accept: function(e){
                        return e.text() === $(this).text();
                    },
                    // **TODO: create an external function
            drop: function(e) {
                    gState.hiddensDragged++;
                    console.log(gLevels[gState.currLevel].numsToHide.length)
                    if (gLevels[gState.currLevel].numsToHide.length ===  gState.hiddensDragged) {
                        gState.currLevel++;
                        $('.buttonContainer').css('display', 'block')                    
                    };
                }
        });
    });
}

  





