
$(document).ready(function () {
   let tr = '';
    $.getJSON("../Json/dashboard.json", function (data) {
        let arr = data.result;
        console.log(arr);
        $.each(arr, function (index, field) {
            tr += `<tr>
            <td class ="child">${field.firstName }</td>
            <td class="child">${field.lastName }</td>
            <td class="child">${field.email}</td>
            <td class="child">
            <a href="../html/edit.html"> 
            <button type="button" class="btn btn-primary dbutton"><i class="fas fa-user-edit iconcol"></i>edit</button>
            </a>
            </td>
            <td class="child"><button type="button" class="btn btn-primary dbutton"><i class="fa fa-user-times iconcol" aria-hidden="true"></i>delete</button> </td>
            </tr>`
        });
        $('#table').append(tr)

    }).fail(function () {
        console.log("An error has occurred.");
    });
   
});
