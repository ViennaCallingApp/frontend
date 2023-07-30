import "./HeaderInfos.css";

export default function HeaderInfos() {
  return (
    <header className="header">
      <h1 className="title mb-5">
        Willkommen bei{" "}
        <span lang="es" className="titleName">
          Vienna
        </span>
        <span lang="en" className="titleName">
          Calling
        </span>
        {/* <span className="lowerCase" aria-hidden="true">
          mit Daten von POPTIS
        </span> */}
      </h1>
      <h2>Wir helfen ihren Weg durch das Wiener U-Bahn Netz zu finden.</h2>
    </header>
  );
}
