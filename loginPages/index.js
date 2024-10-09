//New admin option

function neDoctor() {
    let x = document.getElementById("new-admin");
    let y = document.getElementById("existing-admin");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "block") {
      y.style.display = "none";
    }
  
    let a = document.getElementById("new-doctor");
    let b = document.getElementById("existing-doctor");
  
    if (a.style.display === "block" || b.style.display === "block") {
      a.style.display = "none";
      b.style.display = "none";
    }
}

//Existing admin option
  
function existingDoctor() {
    let x = document.getElementById("new-admin");
    let y = document.getElementById("existing-admin");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  
    let a = document.getElementById("new-doctor");
    let b = document.getElementById("existing-doctor");
  
    if (a.style.display === "block" || b.style.display === "block") {
      a.style.display = "none";
      b.style.display = "none";
    }
}

//New doctor option
  
function newDoctor() {
    let a = document.getElementById("new-doctor");
    let b = document.getElementById("existing-doctor");
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
    if (b.style.display === "block") {
      b.style.display = "none";
    }
  
    let x = document.getElementById("new-admin");
    let y = document.getElementById("existing-admin");
  
    if (x.style.display === "block" || y.style.display === "block") {
      x.style.display = "none";
      y.style.display = "none";
    }
}

//Existing doctor option
  
function existingDoctor() {
    let a = document.getElementById("new-doctor");
    let b = document.getElementById("existing-doctor");
    if (b.style.display === "none") {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
    if (a.style.display === "block") {
      a.style.display = "none";
    }
  
    let x = document.getElementById("new-admin");
    let y = document.getElementById("existing-admin");
  
    if (x.style.display === "block" || y.style.display === "block") {
      x.style.display = "none";
      y.style.display = "none";
    }
}

//New admin setup

function newAdminLogin() {
    let adminUsernameElement = document.getElementById("admin-username");
    let adminUsernameString = adminUsernameElement.value;

    if (adminUsernameString == '') {
        console.log('Admin Username is needed');
    } else {
        adminUsernameString = adminUsernameElement.value;
    }

    var adminPasswordElement = document.getElementById("admin-password");
    let adminPasswordString = adminPasswordElement.value;
    if (adminPasswordString == '') {
        console.log('Admin Password is needed');
    } else {
        adminPasswordString = adminPasswordElement.value;
    }

    var confirmAdminPasswordElement = document.getElementById("confirm-admin-password");
    let confirmAdminPasswordString = adminPasswordElement.value;
    if (confirmAdminPasswordString == '') {
        console.log('Confirm Admin Password');
    } else {
        confirmAdminPasswordString = confirmAdminPasswordElement.value;
    }

    if (adminPasswordString !== confirmAdminPasswordString) {
        alert('Password does not match');
    }

    if (adminUsernameString != '' && adminPasswordString != '' && confirmAdminPasswordString != '' && adminPasswordString === confirmAdminPasswordString) {
        const adminObject = {
            "Admin Username": adminUsernameString
        };
    
        const adminObjectString = JSON.stringify(adminObject);
        localStorage.setItem("adminObject", adminObjectString);
        window.open("../newPatient/newPatient.html");
    } else {
        alert("Enter all the fields");
    }
}

//Existing admin login

function existingAdminLogin() {
    let adminUsernameElement = document.getElementById("admin-username");
    let adminUsernameString = adminUsernameElement.value;

    if (adminUsernameString == '') {
        console.log('Admin Username is needed');
    } else {
        adminUsernameString = adminUsernameElement.value;
    }

    var adminPasswordElement = document.getElementById("admin-password");
    let adminPasswordString = adminPasswordElement.value;
    if (adminPasswordString == '') {
        console.log('Admin Password is needed');
    } else {
        adminPasswordString = adminPasswordElement.value;
    }

    if (adminUsernameString != '' && adminPasswordString != '') {
        const adminObject = {
            "Admin Username": adminUsernameString
        };
    
        const adminObjectString = JSON.stringify(adminObject);
        localStorage.setItem("adminObject", adminObjectString);
        window.open("../newPatient/newPatient.html");
    } else {
        alert("Enter all the fields");
    }
}

//New doctor setup

function newDoctorLogin() {
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

    var confirmDoctorPasswordElement = document.getElementById("confirm-doctor-password");
    let confirmDoctorPasswordString = doctorPasswordElement.value;
    if (confirmDoctorPasswordString == '') {
        console.log('Confirm Doctor Password');
    } else {
        confirmDoctorPasswordString = confirmDoctorPasswordElement.value;
    }

    if (doctorPasswordString !== confirmDoctorPasswordString) {
        alert('Password does not match');
    }

    if (doctorUsernameString != '' && doctorPasswordString != '' && doctorPasswordString === confirmDoctorPasswordString) {
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

//Existing doctor login

function existingDoctorLogin() {
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