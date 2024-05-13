export default function BestellungInput() {
  return (
    <>
      <h1>Übung Honigbestellung</h1>

      <p>Bitte geben Sie die Bestellmenge an (Einheit 500ml Glas)</p>
      <br />
      <div className="bg-gray-300 w-56 rounded-md mx-8 p-4">
        <p>
          <strong>Honig | Menge</strong>
        </p>

        <form action="/bestellungData" method="get">
          <div class="input">
            <p>Akazienhonig</p>
            <input type="text" name="Akazienhonig" />
          </div>
          <div class="input">
            <p>Heidehonig</p>
            <input type="text" name="Heidehonig" />
          </div>
          <div class="input">
            <p>Kleehonig</p>
            <input type="text" name="Kleehonig" />
          </div>
          <div class="input">
            <p>Tannenhonig</p>
            <input type="text" name="Tannenhonig" />
          </div>

          <br />
          <input type="submit" value="Abschicken" />
        </form>
      </div>
    </>
  );
}
