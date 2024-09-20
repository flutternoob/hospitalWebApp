$(document).ready(function () {
    $(function () {
        $("#datepicker").datepicker();
    });
});

function generateUhid() {

    let firstNameElement = document.getElementById("fname");
    let firstNameString = firstNameElement.value;

    if (firstNameString == '') {
        console.log('First name is needed');
    } else {
        firstNameString = firstNameElement.value;
    }

    let lastNameElement = document.getElementById("lname");
    let lastNameString = lastNameElement.value;

    if (lastNameString == '') {
        console.log('Last name is needed');
    } else {
        lastNameString = lastNameElement.value;
    }

    let pickedDateElement = document.getElementById("datepicker");
    let pickedDateString = pickedDateElement.value;

    if (pickedDateString == '') {
        console.log('Date of birth is needed');
    } else {
        pickedDateString = pickedDateElement.value;
    }

    let ageElement = document.getElementById("age");
    let ageString = lastNameElement.value;

    if (ageString == '') {
        console.log('Age is needed');
    } else {
        ageString = ageElement.value;
    }

    let caretakerElement = document.getElementById("caretakerName");
    let caretakerString = lastNameElement.value;

    if (caretakerString == '') {
        console.log("Caretaker's name is needed");
    } else {
        caretakerString = caretakerElement.value;
    }

    let numberElement = document.getElementById("number");
    let numberString = numberElement.value;

    if (numberString == '') {
        console.log('Number is needed');
    } else {
        numberString = numberElement.value;
    }

    if (firstNameString != '' && lastNameString != '' && pickedDateString != '' && ageString != '' && caretakerString != '' && numberString != '') {
        let randomUhid = Math.floor(100000 + Math.random() * 900000);
        document.getElementById("uhid").innerHTML = `The UHID is <b>P${randomUhid.toString()}</b>`;
    } else {
        alert("Enter all the fields");
    }
}