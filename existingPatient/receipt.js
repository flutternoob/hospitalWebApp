const receiptObjectString2 = localStorage.getItem("objectReceipt");
const receiptObject2 = JSON.parse(receiptObjectString2);
console.log(receiptObjectString2);

document.getElementById("uhid-r").innerHTML = `UHID: <b>${receiptObject2["UHID"]}</b>`;
document.getElementById("unit-name-r").innerHTML = `Unit Name: <b>${receiptObject2["Unit"]}</b>`;
document.getElementById("doctor-name-r").innerHTML = `Doctor's Name: <b>${receiptObject2["Doctor's Name"]}</b>`;
document.getElementById("amount").innerHTML = `Amount Paid: <b>${receiptObject2["Amount"]}</b>`;
document.getElementById("entry-time").innerHTML = `Entry Time: <b>${receiptObject2["Time"]}</b>`;

let timeArray = receiptObject2["Time"].split(":");
let hours = parseInt(timeArray[0]);

switch (hours){
    case 9:
        document.getElementById("time-slot").innerHTML = `Time Slot: <b>10 AM - 12 AM</b>`;
        break;
    case 10:
        document.getElementById("time-slot").innerHTML = `Time Slot: <b>11 AM - 1 PM</b>`;
        break;
    case 11:
        document.getElementById("time-slot").innerHTML = `Time Slot: <b>12 PM - 2 PM</b>`;
        break;
    case 12:
        document.getElementById("time-slot").innerHTML = `Time Slot: <b>1 PM - 3 PM</b>`;
        break;
}


