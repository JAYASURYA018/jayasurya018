function checkboxcontrol() {
    total = [];

    var checkboxes = document.getElementsByName("checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            total.push(checkboxes[i].value);
        }

    }
    if (total.length < 2) {
        alert("Must choose at least 2 options");
    }
    return total.join(" ");
}

function myfunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    var a = document.getElementById("fname").value;
    cell1.innerHTML = a;
    document.getElementById("fname").value = '';

    var b = document.getElementById("lname").value;
    cell2.innerHTML = b;
    document.getElementById("lname").value = '';

    var c = document.getElementById("address").value;
    cell3.innerHTML = c;
    document.getElementById("address").value = '';

    var d = document.getElementById("pincode").value;
    cell4.innerHTML = d;
    document.getElementById("pincode").value = '';

    var e = document.getElementById("gender").value;
    cell5.innerHTML = e;
    document.getElementById("gender").value = '';

    var f = document.getElementById("state").value;
    cell7.innerHTML = f;
    document.getElementById("state").value = '';

    var g = document.getElementById("country").value;
    cell8.innerHTML = g;
    document.getElementById("country").value = '';

    var fun = checkboxcontrol();
    cell6.innerHTML = fun;


    var checkboxes = document.getElementsByName("checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}