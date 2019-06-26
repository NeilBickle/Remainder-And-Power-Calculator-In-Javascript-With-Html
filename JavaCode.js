function window_onLoad() {
    document.body.style.backgroundColor = "Beige";
    txtNumOne.focus();
    txtNumOne.scrollIntoView();
    txtNumTwo.value = 0;
    parInfo.innerHTML = 0;
    var k = new Date();
    var j = new Date();
    var g = new Date();
    var t = new Date();
    var h = new Date();
    var r = new Date();
    var d = new Date()
    parDate.innerHTML = "The Current Time And Date Of Logon To This Website Was:   " + t.getHours() + ":" + h.getMinutes() + ":" + r.getSeconds() + ":" + d.getMilliseconds() + "    -   " + g.getDate() + "/" + j.getMonth() + "/" + k.getFullYear();
}

function Title_onmouseover() {
    document.getElementById("Title").style.color = "red";
}

function Title_onmouseout() {
    document.getElementById("Title").style.color = "black";
}

function BtnSubmit1_OnClick() {
    parInfo.innerHTML = Math.pow(txtNumOne.value, txtNumTwo.value);
}

function BtnRem_OnClick() {
    parInfo.innerHTML = txtNumOne.value % txtNumTwo.value;
}

function BtnRem_OnMouseOver() {
    document.getElementById("BtnRem").value = "REMAINDER";
}

function BtnRem_OnMouseOut() {
    document.getElementById("BtnRem").value = "Remainder";
}

document.getElementById("BtnSubmit1").onmouseover = function() { mouseOver()};
document.getElementById("BtnSubmit1").onmouseout = function() { mouseOut()};


function mouseOver() {
    document.getElementById("BtnSubmit1").value = "SUBMIT";
}

function mouseOut() {
    document.getElementById("BtnSubmit1").value = "Submit";
}

