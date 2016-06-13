
var gChals = [
    {
        id: 'game1.html',
        name: 'The Garden',
        isSolved: false
    },
    {
        id: 'game2.html',
        name: 'The Forest',
        isSolved: false
    },
    {
        id: 'game3.html',
        name: 'The Beach',
        isSolved: false
    },
    {
        id: 'game4.html',
        name: 'Some thing else',
        isSolved: false
    }
];

function init(){

    if(localStorage.getItem('Challenge'))gChals = getFromStorage('Challenge');

    console.log(gChals);
}

function getChals(value) {

    console.log(gChals);
    for(var i = 0; i < value; i++){
        if(gChals[i].isSolved === false)return;
    }
    window.location.href = gChals[value].id;
}


// function getChalById(chalId) {}
//
// function renderChals() {}

function reportSolved(chalId){
    // console.log('chalId: ',chalId);

    gChals[chalId].isSolved = true;

    saveToStorage('Challenge',gChals);

    console.log(gChals[chalId].isSolved);

    window.location.href = 'index.html';
}

// $(document).ready(function() {
//
//
//     $('.a').on("click",console.log('clicked'));
//
//     $('.b').on("click");
//
//
// });


function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
    var str = localStorage.getItem(key);
    // console.log(str);
    return JSON.parse(str);
}