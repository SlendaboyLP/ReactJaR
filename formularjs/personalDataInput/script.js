const form = document.getElementById("kontoForm");

const kontoTypes = ["Vorname", "Nachname", "Wohnort", "Mailadresse"];

const saveData = () =>
  kontoTypes.forEach((type) => {
    console.log(form[type].value);

    localStorage.setItem("" + type, form[type].value);
  });

form.onsubmit = saveData;
