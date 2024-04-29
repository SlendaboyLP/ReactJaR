const result = document.getElementById("result");

const honeyTypes = ["Akazienhonig", "Heidehonig", "Kleehonig", "Tannenhonig"];

for (const key in localStorage) {
  if (honeyTypes.includes(key)) {
    const line = document.createElement("p");
    line.innerHTML = `${key}: ${localStorage[key]} Gläser`;
    result.appendChild(line);
  }
}
