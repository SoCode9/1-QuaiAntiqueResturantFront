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
