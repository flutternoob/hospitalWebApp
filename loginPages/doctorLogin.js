function doctorLogin() {
    let doctorUsernameElement = document.getElementById("doctor-username");
    let doctorUsernameString = doctorUsernameElement.value;

    if (doctorUsernameString == '') {
        console.log('Doctor Username is needed');
    } else {
        doctorUsernameString = doctorUsernameElement.value;
    }

    var doctorPasswordElement = document.getElementById("doctor-password");
    let doctorPasswordString = doctorPasswordElement.value;
    if (doctorPasswordString == '') {
        console.log('Doctor Password is needed');
    } else {
        doctorPasswordString = doctorPasswordElement.value;
    }

    if (doctorUsernameString != '' && doctorPasswordString != '') {
        const doctorObject = {
            "Doctor Username": doctorUsernameString
        };
    
        const doctorObjectString = JSON.stringify(doctorObject);
        localStorage.setItem("doctorObject", doctorObjectString);
        window.open("../doctorPatient/doctorPatient.html");
    } else {
        alert("Enter all the fields");
    }
}