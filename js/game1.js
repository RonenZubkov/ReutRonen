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
        correctOpt: 'Pinokio',
        img:''
    },

    {
        id: 2,
        txt: 'Who painted the Mona Lisa?',
        opts:['a','Leonardo da Vinci','c','d'],
        correctOpt: 'Leonardo da Vinci',
        img:''
    },

    {
        id: 3,
        txt: 'Who is the bear in The Jungle Book??',
        opts:['a','b','Balue','d'],
        correctOpt: 'Balue',
        img:''
    }
];




function init(){
    renderQuestion();
}


function renderQuestion(){
    var elOptions = document.querySelectorAll('.options');

    [].forEach.call(elOptions, function(elOption,i) {
        elOption.innerHTML = gQuestsTree[gCurrQuest].opts[i];
    });

}


function checkAnswer(el){

    var elInpAnswer = el;

    if(elInpAnswer === gQuestsTree[gCurrQuest].correctOpt){
        alert('Correct!');
        gCurrQuest++;
        renderQuestion();
    }

    else{
        gameOver();
    }

}


function gameOver(){

    alert('sry wrong answer, please try again.');
    $('.options').hide();
    gCurrQuest = 0;
    renderQuestion();


    //needs to be in delay, for User exp.
    $('.options').show();

}

