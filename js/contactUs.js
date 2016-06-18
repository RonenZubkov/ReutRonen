/**
 * Created by ronen on 16/06/2016.
 */
'use strict';


var gForms = [];

function saveForm() {

    var form = {
        name:'',
        phone:0,
        email:'',
        contact:'',
        txt: ''
    };

    form.name= document.querySelector('#name').value;
    form.phone = document.querySelector('#phone').value;
    form.email = document.querySelector('#email').value;
    form.contact = document.querySelector('#contact').value;
    form.txt = document.querySelector('#message').value;
    gForms.push(form);
    saveToStorage('form', gForms);
}