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
    // **TODO: checking in local storage if gChals[1].isSolved         
      
    gBoard = buildBoard(gLevels[gState.currLevel].boardSize);
    console.table(gBoard);
    renderBoard(gBoard, '.row')
    hideNums();
    renderTheHiddens();
}

function buildBoard (SIZE) {
  var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push(i);
    }
    return board;
}

function renderBoard(board, selector) {
    var elContainer = document.querySelector(selector);

    var strHTMLs = board.map(function (chal, i) {
        var strHtml = '<div id="droppable_'+i+'" class="droppable cell cell_' + i + '" data-type="'+i+'">' + i + '</div>'
        // " ondrop="drop(event)" ondragover="allowDrop(event)" 
        return strHtml;
        
    })

    elContainer.innerHTML = strHTMLs.join('');
}

function hideNums() {
    var numsToHide = gLevels[gState.currLevel].numsToHide;
    for (var i = 0; i < numsToHide.length; i++) {
        var elCell = document.querySelector('.cell_'+numsToHide[i]);  
        //TODO: create a class + clean innerText    
        elCell.style.color = 'white';
   }
}

function renderTheHiddens() {
    
    // **TODO: map?
    var strHtml = '';
    for (var i = 0; i < gLevels[gState.currLevel].numsToHide.length; i++) {
        console.log(gLevels[gState.currLevel].numsToHide[i])
        strHtml += '<div id="draggable" class="draggable draggable_'+i+' drag num_' + i + '" data-type="'+i+'">' + gBoard[gLevels[gState.currLevel].numsToHide[i]] + '</div>'
        // +'draggable="true" ondragstart="drag(event)"'        
    }
        console.log(strHtml)
      var elContainer = document.querySelector('.theHiddensContainer');
        elContainer.innerHTML = strHtml;
        // $('.draggable').draggable({ revert:true })
        // $('.droppable').droppable(
        //     { accept: '.cell' }
        // );     
        // console.log('drop')
    $(function() {
        $(".draggable").draggable({
            revert: true,
            helper: 'clone',
            start: function(event, ui) {
                $(this).fadeTo('fast', 0.5);
            },
            stop: function(event, ui) {
                $(this).fadeTo(0, 1);
            }
        });
        
        console.log($("#droppable_4"))
        console.log( document.querySelector('.draggable_0'))
       
        $("#droppable_4").droppable(
            {
            accept: ".draggable_0",
            // tolerance:"touch",
            drop: drop()
        });
        
        function drop () {
        console.log("hello");
    }
        // $("#droppable").droppable({
        //     accept: '.cell',
        //     hoverClass: 'active',
        //     drop: function(event, ui) {
        //         console.log(event)
        //         this.value = $(ui.draggable).text();
        //         this.css('color', 'red')
        //     }
        // });
    });
}

    
    // $(".droppable_1").droppable({
	// 	accept: ".word2"
    // });
    
    // $(".droppable_1").droppable({
	// 	accept: ".word3"
    // });
    
// });




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


function checkLevelComplited() {
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
    





