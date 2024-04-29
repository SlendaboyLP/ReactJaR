const form = document.getElementById("orderForm");

const honeyTypes = ["Akazienhonig", "Heidehonig", "Kleehonig", "Tannenhonig"];

const saveOrder = () =>
  honeyTypes.forEach((type) => localStorage.setItem(type, form[type].value));

form.onsubmit = saveOrder;
