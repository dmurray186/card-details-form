

document.getElementById("confirm").addEventListener("click", function() {
let text = document.getElementById("name").value;
document.getElementById("Fname").innerHTML = text;
let num = document.getElementById("cnumber").value;
document.getElementById("cardnumber").innerHTML = num;
let expmm = document.getElementById("exp-mm").value;
document.getElementById("expiry-mm").innerHTML = expmm;
let expyy = document.getElementById("exp-yy").value;
document.getElementById("expiry-yy").innerHTML = expyy;
});

// let text = "doc"
// document.getElementById("Fname").innerHTML = text;
