
var gChals = [
    {
        id: 'game1.html',
        name: 'The Garden',
        isSolved: true
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

    if(getFromStorage('Challenge')){
        console.log('Exists');
        gChals = getFromStorage('Challenge');
        console.log(gChals);
    }

}

function getChals(value) {

    for(var i = 0; i < value; i++){
        if(gChals[i].isSolved === false)return;
    }
    // saveToStorage('Challenge',gChals);
    window.location.href = gChals[value].id;
}


// function getChalById(chalId) {}
//
// function renderChals() {}

function reportSolved(chalId){

    gChals[chalId].isSolved = true;

    saveToStorage('Challenge',gChals);
    window.location.href = 'index.html';
    console.log(gChals);

}



function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
}