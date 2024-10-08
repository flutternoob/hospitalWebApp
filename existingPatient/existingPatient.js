$(document).ready(function () {
    $(function () {
        $("#datepicker").datepicker();
    });
});

function opd() {

    let hospitalNoElement = document.getElementById("hospitalNo");
    let hospitalNoString = hospitalNoElement.value;

    if (hospitalNoString == '') {
        console.log('Hospital Number is needed');
    } else {
        hospitalNoString = hospitalNoElement.value;
    }

    var departmentDropdown = document.getElementById("department");
    let departmentString = departmentDropdown.value;
    if (departmentString == '') {
        console.log('Department is needed');
    } else {
        departmentString = departmentDropdown.value;
    }

    var unitNameDropdown = document.getElementById("unit-name");
    let unitNameString = unitNameDropdown.value;
    if (unitNameString == '') {
        console.log('Unit Name is needed');
    } else {
        unitNameString = unitNameDropdown.value;
    }

    var doctorName = document.getElementById("doctor-name");
    let doctorNameString = doctorName.value;
    if (doctorNameString == '') {
        console.log("Doctor's name is needed");
    } else {
        doctorNameString = doctorName.value;
    }

    var time = document.getElementById("time");
    let timeString = time.value;
    if (timeString == '') {
        console.log('Time is needed');
    } else {
        timeString = time.value;
    }

    var amountPaid = document.getElementById("amount-paid");
    let amountPaidString = amountPaid.value;
    if (amountPaidString == '') {
        console.log('Amount Paid is needed');
    } else {
        amountPaidString = amountPaid.value;
    }

    if (hospitalNoString != '' && departmentString != '' && unitNameString != '' && doctorNameString != '' && timeString != '' && amountPaidString != '') {
        const receiptObject = {
            "Hospital Number": hospitalNoString,
            "Department": departmentString,
            "Unit": unitNameString,
            "Doctor's Name": doctorNameString,
            "Time": timeString,
            "Amount": amountPaidString
        };
    
        const receiptObjectString = JSON.stringify(receiptObject);
        localStorage.setItem("objectReceipt", receiptObjectString);
        window.location.href = "receipt.html";
    } else {
        alert("Enter all the fields");
    }
}