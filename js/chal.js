//
// var gChals = [
//     {
//         id: 'game1.html',
//         name: 'The Garden',
//         isSolved: true
//     },
//     {
//         id: 'game2.html',
//         name: 'The Forest',
//         isSolved: false
//     },
//     {
//         id: 'game3.html',
//         name: 'The Beach',
//         isSolved: false
//     },
//     {
//         id: 'game4.html',
//         name: 'Some thing else',
//         isSolved: false
//     }
// ];
//
// localStorage.chals = JSON.stringify(gChals);

var gChals = null;

function init(){

    var chals = getFromStorage('challenge');

    if(chals){
        console.log('Exists');
        gChals = chals;
        console.log(gChals);
    }

}

function getChals() {
    if (gChals === null) gChals = getFromStorage('chals');
    return gChals;
}


// function getChalById() {
//
//     gChals.filter(function(chals){
//         return chals.id ===
//     })
//
// }

// function renderChals() {}

function reportSolved(chalId){

    gChals[chalId].isSolved = true;

    saveToStorage('challenge',gChals);
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