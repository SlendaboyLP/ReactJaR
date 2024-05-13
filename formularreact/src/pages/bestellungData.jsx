import { useSearchParams, Link } from "react-router-dom";

export default function BestellungData() {
  const [searchParams, setSearchParams] = useSearchParams();

  const honeyTypes = ["Akazienhonig", "Heidehonig", "Kleehonig", "Tannenhonig"];
  return (
    <>
      <h1>Bestellung Auswertung</h1>

      {honeyTypes.map((item) => (
        <p>{item + " : " + searchParams.get(item)}</p>
      ))}

      <p>
        <Link
          className="underline text-blue-300"
          to={`/PersonalDataInput?${searchParams.toString()}`}
        >
          Weiter zur Eingabe der Persönlichen Daten
        </Link>
        und dem Abschluss der Bestellung
      </p>
    </>
  );
}
