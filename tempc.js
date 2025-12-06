const textbox = document.getElementById("textbox");
const tofarn = document.getElementById("tofarn");
const tocal = document.getElementById("tocal");
const result = document.getElementById("result");

let temp;
function convert() {
    if (tofarn.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if (tocal.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
         result.textContent = temp.toFixed(1) + "C";
    }
    else {
        result.textContent = "enter unil";
    }
}