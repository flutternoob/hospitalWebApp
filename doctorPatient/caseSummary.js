const caseSummaryObjectString = localStorage.getItem("caseSummaryObject");
const caseSummaryObject2 = JSON.parse(caseSummaryObjectString);
console.log(caseSummaryObjectString);

document.getElementById("hospital-no").innerHTML = `<b>Hospital No: </b>${caseSummaryObject2["Hospital Number"]}`;
document.getElementById("assigned-doctor").innerHTML = `<b>Assigned Doctor: </b>${caseSummaryObject2["Assigned Doctor"]}`;
document.getElementById("current-date").innerHTML = `<b>Date: </b>${caseSummaryObject2["Current Date"]}`;
document.getElementById("case-summary").innerHTML = `<b>Case Summary: </b>${caseSummaryObject2["Case Summary"]}`;
document.getElementById("prescription").innerHTML = `<b>Prescription: </b>${caseSummaryObject2["Prescription"]}`;