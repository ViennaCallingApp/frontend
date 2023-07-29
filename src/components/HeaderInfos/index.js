import "./HeaderInfos.css";

export default function HeaderInfos() {
  return (
    <header className="header">
      <h1 className="title mb-5">
        Willkommen bei <span lang="es"> Vienna</span>
        <span lang="en"> Calling</span>
        <span className="lowerCase" aria-hidden="true">
          gesponsert bei POPTIS
        </span>
      </h1>
      {/* <h2>Navigate the Vienna metro system.</h2> */}
      <h2>Wir helfen ihren Weg durch das Wiener U-Bahn Netz zu finden.</h2>
      {/* <p>
        To define your route, say your starting point and destination after
        pressing the buttons below.
      </p> */}
    </header>
  );
}
