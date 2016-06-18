'use strict';


var gLevels = [
            {

            gMathQuest: [],            
            gMathAnswers: [],
            boardSize: 9,
            //TODO: add img $ renderImg func:
            }
]
var gState = {
    currLevel: 0,
    ansDragged: 0
}

function initGame3() {
    // **TODO: checking in local storage if gChals[1].isSolved  - and blocks the access to this page       

    console.log('initGame3()')
    createQusetAndAns ();
    renderQuests(gLevels[gState.currLevel].gMathQuest, '.questContainer')
    renderAns(gLevels[gState.currLevel].gMathAnswers, '.answerContainer')    
}

function createQusetAndAns () {
    var rand1 = 0;
    var rand2 = 0;
    var ans = 0;
    var tempMathQuest = [] 

    for (var i = 0; i < gLevels[gState.currLevel].boardSize; i++) {
        rand1 = parseInt(Math.random() * 9)
        rand2 = parseInt(Math.random() * 9)
        ans = rand1 + rand2;
        tempMathQuest.push (rand1 + '+' + rand2)
        gLevels[gState.currLevel].gMathAnswers.push(ans);
    }
    
    // TODO: think of a better way:
    
    var temp = tempMathQuest.slice(0, 3);
    gLevels[gState.currLevel].gMathQuest.push(temp);
   
    temp = tempMathQuest.slice(3, 6);
    gLevels[gState.currLevel].gMathQuest.push(temp);
    
    temp = tempMathQuest.slice(6, 9);    
    gLevels[gState.currLevel].gMathQuest.push(temp);
    
}

function renderQuests(arr, selector) {
  var elContainer = document.querySelector(selector);
  var strHtml = '';
  
  //TODO: foreach / map ?
    for (var i = 0; i < gLevels[gState.currLevel].gMathQuest.length; i++) {
        strHtml += '<div class="row">'
        for (var j = 0; j < gLevels[gState.currLevel].gMathQuest[i].length; j++) {
            strHtml += '<div class="droppable quset">'+ gLevels[gState.currLevel].gMathQuest[i][j]+'</div>'                    
        }
        strHtml += '</div>'   
        }
       
    elContainer.innerHTML = strHtml;
}

function renderAns(arr, selector) {
    var elContainer = document.querySelector(selector);

    var strHTMLs = arr.map(function (ans) {
        var strHtml = '<div class="draggable ans">'+ ans +'</div>' 
        return strHtml;
        
    })
    
    elContainer.innerHTML = strHTMLs.join('');
    
    
    $(function() {

        $('.draggable').draggable({
            start: function(event, ui) {
                $(this).fadeTo('fast', 0.5);
            },
            stop: function(event, ui) {
                $(this).fadeTo(0, 1);
            }
        });
       
        $('.droppable').droppable({
            drop: checkIfToDrop,
            accept: '.draggable',
        });
    });
}

function checkIfToDrop (event, ui) {

    var str =  ($(this).text());
    var tmp_arr = str.split(/[+]/);
    var product = +(tmp_arr[0]) + (+tmp_arr[1]);
    
    if (product === +( (ui.draggable).text() ))  {
        // **TODO: create a class:
        $(this).css("visibility", "hidden");
        $(ui.draggable).css("visibility", "hidden");
        
        ui.draggable.draggable({revert: false})
        
        gState.ansDragged++;
        console.log(gLevels[gState.currLevel].gMathAnswers.length)
        if(gState.ansDragged === gLevels[gState.currLevel].gMathAnswers.length) $('.buttonContainer').css("display", "block")
    }  
    else ui.draggable.draggable({revert: true})         
}


