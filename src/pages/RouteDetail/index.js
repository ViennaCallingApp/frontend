import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function RouteDetail() {
  const [steps, setSteps] = useState(null);
  const [middleSteps, setMiddleSteps] = useState(null);
  const [showDescription, setShowDescription] = useState({});
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
        const steps = [...description.steps];
        setSteps(steps);
        const middleSteps = [...description.steps];
        middleSteps.shift();
        middleSteps.pop();
        setMiddleSteps(middleSteps);
        setShowDescription({
          ...description.steps.map((step,index) => false)
        })
        console.log("SHOW DESCRIPTION: ", showDescription);
      });
  }, []);

  return (
    <div className="wrapper">
      {!steps && <p>Route wird berechnet...</p>}
      {steps && (
        <>
          <section>
            <h1>Ihre Route:</h1>
            <ol>
              {middleSteps.map(({ title, stepQueryFrom, stepQueryTo }) => (
                <>
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
                  <li key={title}>
                    {"Um " +
                      stepQueryTo.startTime +
                      " " +
                      stepQueryTo.lineNumber +
                      " von " +
                      stepQueryTo.from +
                      " bis " +
                      stepQueryTo.to}
                  </li>
                </>
              ))}
            </ol>
          </section>
          <section>
          <h1>Ihre Wegbeschreibungen:</h1>
          <ol>
          {steps.map(({title, route}, index) => (
            <li key={title}>
              <button onClick={() => setShowDescription({...showDescription, [index]: true})}>{title}</button>
              {showDescription[index] && <p>
                {route.contents.map((text) => (
                  <span>{text}</span>
                ))}
              </p>}
            </li>
          ))}
          </ol>

          </section>
        </>
      )}
    </div>
  );
}
