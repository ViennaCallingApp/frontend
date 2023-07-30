import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function RouteDetail() {
  const [steps, setSteps] = useState(null);
  const [middleSteps, setMiddleSteps] = useState(null);
  const [showDescription, setShowDescription] = useState({});
  const [params] = useSearchParams();
  const start = params.get("start");
  const end = params.get("end");

  useEffect(() => {
    fetch(
      "https://viennacalling.bleggbeard.io/api/path/" +
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
          ...description.steps.map((step, index) => false),
        });
        console.log("SHOW DESCRIPTION: ", showDescription);
      });
  }, []);

  return (
    <div className="wrapper">
      <header aria-hidden="true" className="headerDetail">
        ViennaCalling
      </header>
      {!steps && <p>Route wird berechnet...</p>}
      {steps && (
        <>
          <section>
            <h1>Ihre Route:</h1>
            <ol>
              {middleSteps.map(({ title, stepQueryFrom, stepQueryTo }) => (
                <>
                  <li key={title + "_from"}>
                    {"Um " +
                      stepQueryFrom.startTime +
                      " " +
                      stepQueryFrom.lineNumber +
                      " von " +
                      stepQueryFrom.from +
                      " bis " +
                      stepQueryFrom.to}
                  </li>
                  <li key={title + "_to"}>
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
            <ol class="list">
              {steps.map(({ title, route }, index) => (
                <li key={title} className="listItem">
                  <button
                    onClick={() =>
                      setShowDescription({ ...showDescription, [index]: true })
                    }
                    className="wayStepButton"
                  >
                    {title}
                  </button>
                  {showDescription[index] && (
                    <p aria-live="polite" className="description">
                      <span className="text">{route.contents.join(" ")}</span>
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </>
      )}
    </div>
  );
}
