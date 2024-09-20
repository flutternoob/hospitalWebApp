$(document).ready(function () {
    $(function () {
        $("#datepicker").datepicker();
    });
});

function assignDoctor() {
    var doctorDropdown = document.getElementById("assigned-to-doctor");
    let assignedDoctorString = doctorDropdown.value;
    if (assignedDoctorString == '') {
        console.log('Assigned Doctor is needed');
    } else {
        document.getElementById("assigned-doctor").innerHTML = assignedDoctorString;
    }
}

function updateCase() {
    let uhidElement = document.getElementById("uhid");
    let uhidString = uhidElement.value;

    if (uhidString == '') {
        console.log('UHID is needed');
    } else {
        uhidString = uhidElement.value;
    }

    let assignedDoctor = document.getElementById("assigned-to-doctor");
    let assignedDoctorString = assignedDoctor.value;
    if (assignedDoctorString == '') {
        console.log('Assigned Doctor is needed');
    } else {
        document.getElementById("assigned-doctor").innerHTML = assignedDoctorString;
    }

    let todaysDate = document.getElementById("datepicker");
    let dateString = todaysDate.value;
    if (dateString == '') {
        console.log("Today's date is needed");
    } else {
        dateString = todaysDate.value;
    }

    let caseNotes = document.getElementById("case-notes");
    let caseNotesString = caseNotes.value;
    if (caseNotesString == '') {
        console.log("Case notes are needed");
    } else {
        caseNotesString = caseNotes.value;
    }

    let prescription = document.getElementById("prescription");
    let prescriptionString = prescription.value;
    if (prescriptionString == '') {
        console.log("Prescription is needed");
    } else {
        prescriptionString = prescription.value;
    }

    if (uhidString != '' && assignedDoctorString != '' && dateString != '' && caseNotesString != '' && prescriptionString != '') {
        const caseSummaryObject = {
            "UHID": uhidString,
            "Assigned Doctor": assignedDoctorString,
            "Current Date": dateString,
            "Case Summary": caseNotesString,
            "Prescription": prescriptionString,
        };
    
        const caseSummaryObjectString = JSON.stringify(caseSummaryObject);
        localStorage.setItem("caseSummaryObject", caseSummaryObjectString);
        window.open("caseSummary.html");
    } else {
        alert("Enter all the fields");
    }
}