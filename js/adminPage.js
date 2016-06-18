/**
 * Created by ronen on 18/06/2016.
 */


function getFromStorage(key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
}



//
// function renderBooks(elBooksTable) {
//
//     var strHTML = '<table border="1" class = "table table-hover table-bordered table-responsive"><tbody>';
//     strHTML += '<tr><th>ID</th><th>TITLE</th><th onclick="sorting()">PRICE</th><th>Points</th><th class = "actions">ACTIONS</th></tr>';
//
//     gBooks.forEach(function(book,i) {
//
//         var className = 'row' + i;
//         var classTitle = 'row title' + i;
//         var classRate = 'row rate' + i;
//         var classPrice = 'row price' + i;
//         var classRead = 'row btn btn-info btn-sm';
//         var readDataToggle = 'data-toggle="modal"';
//         var readDataTarget = 'data-target="#myModal"';
//
//         strHTML += '<tr class ="' +  className + '">';
//
//         strHTML += '<td>' + book.id + '</td>';
//         strHTML += '<td class = "' + classTitle + '">' + book.title + '</td>';
//         strHTML += '<td class = "' + classPrice + '">' + book.price + '</td>';
//         strHTML += '<td class = "' + classRate + '">' + book.rate + '</td>';
//         strHTML += '<td type="button" class = "' + classRead + '" onclick="btnLike(' + i + ')">' + book.Actions[4] + '</td>';
//         strHTML += '<td type="button" class = "btn btn-info btn-sm" onclick="btnDisLike(' + i + ')">' + book.Actions[5] + '</td>';
//         strHTML += '<td type="button" class = "btn btn-info btn-sm" onclick="btnEdit(' + i + ')">' + book.Actions[0] + '</td>';
//         strHTML += '<td type="button" class = "btn btn-info btn-sm" onclick="btnSave(' + i + ')">' + book.Actions[1] + '</td>';
//         strHTML += '<td type="button" class = "btn btn-info btn-sm" onclick="btnDelete(' + i + ')">' + book.Actions[2] + '</td>';
//         strHTML += '<td type="button" class = "' + classRead + '" + ' + readDataToggle + ' + '+ readDataTarget +'onclick="readBook(' + i + ')">' + book.Actions[3] + '</td>';
//
//         strHTML += '</tr>';
//     });
//
//     strHTML += '<tr>';
//     strHTML += '<td><input type="button" class="add btn btn-info btn-sm" onclick="addRow()" value="Add Row"></td>';
//     strHTML += '<td><input type="text" class="newRowTitle" value="' + 'New book\'s title here' + '"></td>';
//     strHTML += '<td><input type="text" class="newRowPrice" value="' + 'New book\'s price here'  + '"></td>';
//     strHTML += '<td></td>';
//     strHTML += '<td></td>';
//     strHTML += '</tr>';
//     strHTML += '</tbody></table>';
//     elBooksTable.innerHTML = strHTML;
// }