function adminLogin() {
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