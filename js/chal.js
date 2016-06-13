
var gChals;

function init(){    

    gChals = getChals();   
    console.log('gChals', gChals);
     

    renderChals(gChals, '.content');
}

function getChals() {
    console.log('getChals');
    
    if (localStorage.getItem('Challenges')) gChals = JSON.parse(localStorage.getItem('Challenges'));
    else gChals = [
        {
            url: 'game1.html',
            name: 'game1',
            isSolved: false
        },
        {
            url: 'game2.html',
            name: 'game2',
            isSolved: false
        },
        {
            url: 'game3.html',
            name: 'game3',
            isSolved: false
        },
        {
            url: 'game4.html',
            name: 'game4',
            isSolved: false
        }
    ];

    return gChals;

}

function renderChals(chals, selector) {
  var elContainer = document.querySelector(selector);

    var strHTML = '';

  chals.forEach(function (chal, i) {
    strHTML += ' <div class="chals chal_' + i + '" onclick="getChalById(this, '+ i +')">' + '<h2>' + chal.name + '</h2>' 
    + '<img src = ' + getImgIsSolved (chals, i) + '  class = img-responsive >' +'</div>'
  });

    console.log(strHTML);
    elContainer.innerHTML = strHTML;
}

function getImgIsSolved (chals, chalsId) {
    var imgSrc;
      if (chals[chalsId].isSolved === false) imgSrc = "img/img_index/lock.jpg";
      else imgSrc = "img/img_index/V.png"
      return imgSrc;
  }

function getChalById(chal, chalId) {
    for(var i = 0; i < chalId; i++){
        if(gChals[i].isSolved === false) return;
    }
    window.location.href = gChals[chalId].url;
}

function reportSolved(chalId){
    getChals();
    console.log(gChals);
    
    gChals[chalId].isSolved = true;

    saveToStorage('challenges',gChals);
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