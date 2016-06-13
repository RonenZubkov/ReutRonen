/**
 * Created by ronen on 13/06/2016.
 */
'use strict';

var gQuestsTree = [
    {
        id: 1,
        txt: 'Who was created by Gepetto the woodcarver??',
        correctAnswer: 'Pinokio'
    },

    {
        id: 2,
        txt: 'Who painted the Mona Lisa?',
        correctAnswer: 'Leonardo da Vinci'
    },

    {
        id: 3,
        txt: 'Who is the bear in The Jungle Book??',
        correctAnswer: 'Balue'
    }
];





// var gPrevQuest;
// var gCurrQuest;
// var gLastRes;


$(document).ready(function(){
    var $elFirstQues = $('.question1');
    //Will be random question.
    $elFirstQues.html(gQuestsTree[0].txt);

    // var text = element.textContent;
    // element.textContent = "i love jQuery (4u :P )";


    var $elCorrectBtn = $('.randomBtn1');
    //Will be random answer.
    $elCorrectBtn.html(gQuestsTree[0].correctAnswer);

    // gQuestsTree.yes = createQuest('Putin!');
    // gQuestsTree.no = createQuest('Um Kultum!!');
    //
    // gPrevQuest = null;
    // gCurrQuest = gQuestsTree;
});

function checkAnswer(value){
    console.log(value);
    var correctAnswer = ($('.randomBtn1').html());
    console.log(correctAnswer);
    if(correctAnswer === gQuestsTree[0].correctAnswer)alert('Correct!');

}


//
// function createQuest(txt) {
//     return {
//         txt: txt,
//         yes: null,
//         no: null
//     }
// }
//
//
// function startGuessing() {
//     //alert('Starting')
//     var $elGameStart = $('.gameStart');
//     $elGameStart.hide();
//
//     var $elGameQuest = $('.gameQuest');
//
//     renderQuest();
//
//     $elGameQuest.show();
// }
//
// function renderQuest() {
//     var $elGameQuest = $('.gameQuest');
//     var $elQuestTxt = $elGameQuest.children('h2');
//     $elQuestTxt.html(gCurrQuest.txt);
// }
//
// function userResponse(res) {
//
//     // If this node has no children
//     if (gCurrQuest.yes === null) {
//         if (res === 'yes') {
//             alert('Yes, I knew it!');
//         } else {
//             //alert('I dont know...')
//             var $elGameNewQuest = $('.gameNewQuest');
//             var $elGameQuest = $('.gameQuest');
//             $elGameQuest.hide();
//             $elGameNewQuest.show();
//
//         }
//     } else {
//         gPrevQuest = gCurrQuest;
//         gCurrQuest = gCurrQuest[res];
//         gLastRes   = res;
//         renderQuest();
//     }
// }
//
// function addPerson() {
//     var newPersonName   = $('#newPerson').val();
//     var newQuestTxt     = $('#newQuest').val();
//
//     var newQuest        = createQuest(newQuestTxt);
//     var newGuess        = createQuest(newPersonName);
//
//     newQuest.yes    = newGuess;
//     newQuest.no     = gCurrQuest;
//
//     gPrevQuest[gLastRes]  = newQuest;
//
//     restartGame();
//
//
//     //console.log('newPerson', newPersonName);
//     //console.log('newQuest', newQuestTxt);
//
// }
//
//
//
// function restartGame() {
//     $('.gameNewQuest').hide();
//     $('.gameStart').show();
//     gCurrQuest = gQuestsTree;
//     gPrevQuest = null;
//     gLastRes = null;
// }