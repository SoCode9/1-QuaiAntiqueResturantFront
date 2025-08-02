const middayButton = document.getElementById("midiRadio");
const eveningButton = document.getElementById("soirRadio");
const middayHours = document.getElementById("selectHourMidday");
const eveningHours = document.getElementById("selectHourEvening");

middayButton.addEventListener("change", () => {
  middayHours.classList.remove("d-none");
  eveningHours.classList.add("d-none");
});

eveningButton.addEventListener("change", () => {
  middayHours.classList.add("d-none");
  eveningHours.classList.remove("d-none");
});

const inputNbPeople = document.getElementById("NbConvivesInput");
const inputDate = document.getElementById("DateInput");
const btnValidation = document.getElementById("btn-validation");
const serviceChoisi = document.querySelectorAll('input[name="serviceChoisi"]');
const radioContainer = document.querySelector('.radio-container'); 

inputNbPeople.addEventListener("keyup", validateForm);
inputDate.addEventListener("change", validateForm);

serviceChoisi.forEach((radio) => {
  radio.addEventListener("change", validateForm);
});

function validateForm() {
  const nbPeopleOk = validateRequires(inputNbPeople);
  const inputDateOK = validateRequires(inputDate);
  const serviceChoisiOk = validateRadioGroup(serviceChoisi, radioContainer);

  if (nbPeopleOk && inputDateOK && serviceChoisiOk) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

function validateRequires(input) {
  if (input.value != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRadioGroup(radioNodeList, container) {
  const isChecked = Array.from(radioNodeList).some((radio) => radio.checked);
  if (isChecked) {
    container.classList.remove("is-invalid");
    container.classList.add("is-valid");
  } else {
    container.classList.remove("is-valid");
    container.classList.add("is-invalid");
  }
  return isChecked;
}
