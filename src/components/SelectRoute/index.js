import Button from "react-bootstrap/Button";

export default function SelectRoute() {
  return (
    <div>
      <p>
        Um die gewünschte Route zu berechnen, sagen sie ihren Start- und
        Zielort, nachdem sie die folgenden Schaltflächen drücken.
      </p>
      <Button variant="primary" aria-describedby="Sprechen sie nach dem Klick">
        Start-Haltestelle bestimmen
      </Button>

      <Button variant="primary" aria-describedby="Sprechen sie nach dem Klick">
        End-Haltestelle bestimmen
      </Button>
    </div>
  );
}
