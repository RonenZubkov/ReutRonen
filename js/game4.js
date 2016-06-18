/**
 * Created by ronen on 15/06/2016.
 */
'use strict';

var gStageNow = 0;

var gStages = [
    {
        id: 1,
        txt: 'How much pink flowers are in the picture?',
        answers:['1','2','3','4'],
        correctOpt: 3,
        className: 'flower',
        objNum: 4
    },

    {
        id: 2,
        txt: 'How much birds are in the picture?',
        answers:['1','2','3','4'],
        correctOpt: 2,
        className: 'bird',
        objNum: 3
    },

    {
        id: 3,
        txt: 'How much tress are displayed?',
        answers:['2','4','1','5'],
        correctOpt: 3,
        className: 'tree',
        objNum: 5
    }
];


function init(){
    renderObjs();
}

function renderObjs(){
    var elAnswers = document.querySelector('.answers');
    var elObjFrame = document.querySelector('.objFrame');
    var counter = 1;

    var $elQuestion = $('.questDis').html(gStages[gStageNow].txt);

    var strHtmls = gStages[gStageNow].answers.map(function (answer,i) {
        var strHtml = '<li class="answer" onclick="checkAnswer('+i+')">' + answer + '</li>';
        return strHtml;
    });

    elAnswers.innerHTML = strHtmls.join('');


    for(var i = 0; i < gStages[gStageNow].objNum; i++){

        var strImg = '<img class="objectBox ' + (gStages[gStageNow].className + counter) +
            '" src="img/game4Img/' + gStages[gStageNow].className + '.png">';
        counter++;
        
        elObjFrame.innerHTML += strImg;
    }

}


function checkAnswer(i){
    if(i === gStages[gStageNow].correctOpt){
        alert('Correct!');
        gStageNow++;
        cleanLastStage();
        ifWon();
        renderObjs();
        checkLvl();
    }

    else{
        gameOver();
    }

}

function gameOver(){
    alert('Sry wrong answer please try again,or press home to return.');
    cleanLastStage();
    gStageNow = 0;
    renderObjs();
}


function cleanLastStage(){
    $('.objFrame').html('');
}

function ifWon(){
    if(gStageNow === gStages.length){
        alert('game won');
        console.log('gameWon');
        $('.buttonContainer').css('display', 'block');
    }

}

function checkLvl(){
    if(gStageNow === 1)console.log('Hello blat');
    if(gStages[gStageNow].id === 2)flyBird();
    if(gStages[gStageNow].id === 3)opacityLevel();

}

function flyBird(){
    var elObjects = document.querySelectorAll('.objectBox');

    [].forEach.call(elObjects, function(elObject) {
        elObject.classList.add('flyRight');
        setTimeout(function () {
            elObject.style.visibility = 'hidden';
        }, 7000);
});
}

function opacityLevel(){
    var elObjects = document.querySelectorAll('.objectBox');

    [].forEach.call(elObjects, function(elObject) {
        elObject.classList.add('opacityChange');
        setTimeout(function () {
            elObject.style.visibility = 'hidden';
        }, 7000);
    });
}
