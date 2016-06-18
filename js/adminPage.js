/**
 * Created by ronen on 18/06/2016.
 */


var gFormInput = getFromStorage('form');

function init(){
    console.log(gFormInput);
    renderTable();

}


function renderTable() {

    var elTable = document.querySelector('.adminTable');

    var strHTML = '<table border="1" class = "table table-hover table-bordered table-responsive"><tbody>';
    strHTML += '<tr><th>Name</th><th>Phone</th><th>Email</th><th>Contact</th><th>Text</th></tr>';

    gFormInput.forEach(function(form) {

        strHTML += '<td>' + form.name + '</td>';
        strHTML += '<td>' + form.phone + '</td>';
        strHTML += '<td>' + form.email + '</td>';
        strHTML += '<td>' + form.contact + '</td>';
        strHTML += '<td>' + form.txt + '</td>';

        strHTML += '</tr>';
    });

    strHTML += '</tbody></table>';
    elTable.innerHTML = strHTML;
}