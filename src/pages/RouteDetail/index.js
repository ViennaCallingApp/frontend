import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function RouteDetail() {
  const [steps, setSteps] = useState(null);
  const [params] = useSearchParams();
  const start = params.get("start");
  const end = params.get("end");
  console.log("start", start, end);

  useEffect(() => {
    fetch(
      "http://localhost:8080/api/path/" +
        start.toLowerCase() +
        "/" +
        end.toLowerCase()
    )
      .then((response) => {
        return response.json();
      })
      .then((description) => {
        setSteps(description.steps);
      });
  }, []);

  return (
    <div className="wrapper">
      {!steps && <p>Route wird berechnet...</p>}
      {steps && (
        <section>
          <h1>Ihre Route:</h1>
          <ol>
            {steps.map(({ title, stepQueryFrom, stepQueryTo }) => (
              <li key={title}>
                {"Um " +
                  stepQueryFrom.startTime +
                  " " +
                  stepQueryFrom.lineNumber +
                  " von " +
                  stepQueryFrom.from +
                  " bis " +
                  stepQueryFrom.to}
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
