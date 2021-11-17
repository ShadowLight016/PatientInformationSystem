import { notAllowedCharactersIfEmpty } from "./modules.js";
document.querySelectorAll('.input-controls').forEach(item => { item.addEventListener('keyup', notAllowedCharactersIfEmpty)});
document.getElementById('medY').addEventListener('change', enableMeds);
document.getElementById('medN').addEventListener('change', enableMeds);


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();


if (dd < 10) {
    dd = '0' + dd;
 }

 if (mm < 10) {
    mm = '0' + mm;
 }
console.log(dd)
today = yyyy + '-' + mm + '-' + dd;
document.getElementById('birthdate').setAttribute("max", today);
function enableMeds() {
    if (document.getElementById('medY').checked) {
        document.getElementById('med-reason').disabled = false;
        document.getElementById('med-reason').required = true;
    } else {
        document.getElementById('med-reason').value = "";
        document.getElementById('med-reason').required = false;
        document.getElementById('med-reason').disabled = true;
    }
}

