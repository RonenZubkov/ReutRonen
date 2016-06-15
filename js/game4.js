/**
 * Created by ronen on 15/06/2016.
 */
'use strict';

var gStageNow = 0;
var gDifficult = 2;


var gStages = [
    {
        id: 1,
        txt: 'How much??',
        answers:['a','b','c','d'],
        correctOpt: 3,
        className: 'flower'
    },

    {
        id: 2,
        txt: 'How much?',
        answers:['a','b','c','d'],
        correctOpt: 1
    },

    {
        id: 3,
        txt: 'How much?',
        answers:['a','b','c','d'],
        correctOpt: 2
    }
];


function init(){
    renderObjs();
}

function renderObjs(){
    var elAnswers = document.querySelector('.answers');
    var elObjFrame = document.querySelector('.objFrame');
    var counter = 1;

    // var $elQuestion = $('.question').html(gQuestsTree[gCurrQuest].txt);


    var strHtmls = gStages[gStageNow].answers.map(function (answer,i) {
        var strHtml = '<li class="answer" onclick="checkAnswer('+i+')">' + answer + '</li>';
        return strHtml;
    });

    elAnswers.innerHTML = strHtmls.join('');

    for(var i = 0; i < gDifficult; i++){

        var strImg = '<img class="flower ' + (gStages[gStageNow].className + counter) +
            '" src="img/game4Img/' + gStages[gStageNow].className + '.png">';

        counter++;
        
        elObjFrame.innerHTML += strImg;
    }

}


function checkAnswer(i){
    console.log('answers index is: ',i);
}

