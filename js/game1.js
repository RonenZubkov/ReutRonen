/**
 * Created by ronen on 13/06/2016.
 */
'use strict';

var gCurrQuest = 0;
var gQuestsTree = [
    {
        id: 1,
        txt: 'Who was created by Gepetto the woodcarver??',
        opts:['a','b','c','Pinokio'],
        correctOpt: 3,
        lifeSave: true
    },

    {
        id: 2,
        txt: 'Who painted the Mona Lisa?',
        opts:['a','Leonardo da Vinci','c','d'],
        correctOpt: 2,
        lifeSave: true
    },

    {
        id: 3,
        txt: 'Who is the bear in The Jungle Book??',
        opts:['a','b','Baloo','d'],
        correctOpt: 3,
        lifeSave: true
    }
];


function init(){
    renderQuest();
    // console.log('Initied');
}


function renderQuest(){
    var elOptions = document.querySelector('.options');
    var elImg = document.querySelector('.frame');
    elImg.innerHTML = '<img src="img/game1Img/pic'+ gQuestsTree[gCurrQuest].id + '.jpg" class="img-rounded img-responsive" alt="">';


    var strHtmls = gQuestsTree[gCurrQuest].opts.map(function (opt,i) {
        var strHtml = '<li class="option" onclick="checkOpt('+i+')">' + opt + '</li>';
        return strHtml;
    });

    elOptions.innerHTML = strHtmls.join('');
}


function checkOpt(i){


    if(i === gQuestsTree[gCurrQuest].correctOpt){
        alert('Correct!');
        gCurrQuest++;
        renderQuest();
    }

    else{
        gameOver();
    }

}


function gameOver(){

    alert('sry wrong answer, please try again.');
    $('.options').hide();
    gCurrQuest = 0;
    renderQuest();
    //needs to be in delay, for User exp.
    // $('.options').show();

}



function lifeSaver(){
    var min = 0;
    var max = 4;
    var currQuest = gQuestsTree[gCurrQuest];

    if(gQuestsTree[gCurrQuest].lifeSave) {
        var randNum1 = getRandomIntInclusive(min, max);
        var randNum2 = getRandomIntInclusive(min, max);

        if (randNum1 === randNum2) {
            randNum2 = getRandomIntInclusive(0, 4);
        }

        var $optDrop1 = $('.option' + randNum1);
        var $optDrop2 = $('.option' + randNum2);

        console.log('random1: ', randNum1);
        console.log('random2: ', randNum2);

        if($optDrop1.html()!== currQuest.correctOpt && $optDrop2.html()!== currQuest.correctOpt){
            $optDrop1.hide();
            $optDrop2.hide();
        }
        else{
            //How can i get out from this bugs :|
        }
        currQuest.lifeSave = false;
    }

}


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}