/**
 * Created by ronen on 16/06/2016.
 */

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


function getFromStorage(key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
}

