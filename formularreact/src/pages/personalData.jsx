import { useSearchParams, Link } from "react-router-dom";

export default function PersonalDataInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const honeyTypes = ["Akazienhonig", "Heidehonig", "Kleehonig", "Tannenhonig"];

  return (
    <>
      <h1>Kontaktdaten Eingabe</h1>

      <form action={`/abschluss`} method="get">
        <div class="input">
          <p>Vorname:</p>
          <input type="text" name="Vorname" id="" />
        </div>
        <div class="input">
          <p>Nachname:</p>
          <input type="text" name="Nachname" id="" />
        </div>
        <div class="input">
          <p>Wohnort:</p>
          <input type="text" name="Wohnort" id="" />
        </div>
        <div class="input">
          <p>Mailadresse:</p>
          <input type="text" name="Mailadresse" id="" />
        </div>
        {honeyTypes.map((item) => (
          <input type="hidden" name={item} value={searchParams.get(item)} />
        ))}

        <br />
        <input type="submit" value="Abschicken" />
      </form>
    </>
  );
}
