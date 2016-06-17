'use strict';

var gMathQuest = [['3 + 4', '11 + 6', '8 + 2'], ['20 + 3','1 + 2', '5 + 7'], ['3+6', '2+9', '4+5']]
var gMathAnswers = ['7', '17', '10', '23', '3', '12', '9', '11', '9']

function initGame3() {
    console.log('initGame3()')
renderQuests(gMathQuest, '.questContainer')
renderAns(gMathAnswers, '.answerContainer')    
}

function renderQuests(arr, selector) {
  var elContainer = document.querySelector(selector);
  var strHtml = '';
  
  //TODO: foreach
    for (var i = 0; i < gMathQuest.length; i++) {
        strHtml += '<div class="row">'
        for (var j = 0; j < gMathQuest[i].length; j++) {
            strHtml += '<div class="droppable quset">'+ gMathQuest[i][j]+'</div>'                    
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
        // console.log(counter++)
            var counter = 0;
        $('.draggable').draggable({
            start: function(event, ui) {
                $(this).fadeTo('fast', 0.5);
            },
            stop: function(event, ui) {
                $(this).fadeTo(0, 1);
            }
        });
       
        $('.droppable').droppable({
            drop: handleDrop, 
            accept: '.draggable',
        });
    });
}

function handleDrop (event, ui) {
    var str =  ($(this).text());
    var tmp_arr = str.split(/[+]/);
    var product = +(tmp_arr[0]) + (+tmp_arr[1]);
    
    if (product === +( (ui.draggable).text() ))  {
        $(this).css("visibility", "hidden");
        $(ui.draggable).css("visibility", "hidden");
        
        ui.draggable.draggable({revert: false})
    }  
    else ui.draggable.draggable({revert: true}) 
    
}


