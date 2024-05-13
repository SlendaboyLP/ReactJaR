import { useSearchParams } from "react-router-dom";
export default function Abschluss() {
  const [searchParams, setSearchParams] = useSearchParams();
  const honeyTypes = ["Akazienhonig", "Heidehonig", "Kleehonig", "Tannenhonig"];
  const personalData = ["Vorname", "Nachname", "Wohnort", "Mailadresse"];

  return (
    <>
      <h1>Bestellung Abschluss</h1>

      {personalData.map((item) => (
        <p>{item + " : " + searchParams.get(item)}</p>
      ))}

      {honeyTypes.map((item) => (
        <p>{item + " : " + searchParams.get(item)}</p>
      ))}
    </>
  );
}
