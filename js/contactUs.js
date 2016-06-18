/**
 * Created by ronen on 16/06/2016.
 */
'use strict';


var gForm = [{
    name:'',
    phone:0,
    email:'',
    contact:'',
    txt: ''
}];

function saveForm() {

    gForm.name= document.querySelector('#name').value;
    gForm.phone = document.querySelector('#phone').value;
    gForm.email = document.querySelector('#email').value;
    gForm.contact = document.querySelector('#contact').value;
    gForm.txt = document.querySelector('#message').value;
    
    saveToStorage('form', gForm);
}