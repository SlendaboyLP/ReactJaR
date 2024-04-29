const dataDiv = document.getElementById("data");
const kontoTypes = ["Vorname", "Nachname", "Wohnort", "Mailadresse"];
const honeyTypes = ["Akazienhonig", "Heidehonig", "Kleehonig", "Tannenhonig"];

honeyTypes.forEach((type) => {
  const line = document.createElement("div");
  line.innerHTML = `${type}: ${localStorage[type]}`;
  dataDiv.appendChild(line);
});

kontoTypes.forEach((type) => {
  const line = document.createElement("div");
  line.innerHTML = `${type}: ${localStorage[type]}`;
  dataDiv.appendChild(line);
});
