import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./SelectRoute.css";

import { stops } from "./Stops.mock.js";

export default function SelectRoute() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  let SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;
  let SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;

  let grammar =
    "#JSGF V1.0; grammar stops; public <stops> = " + stops.join(" | ") + ";";
  let recognition = new SpeechRecognition();
  let recognitionList = new SpeechGrammarList();

  recognitionList.addFromString(grammar, 1);
  recognition.grammars = recognitionList;
  recognition.lang = "de-AT";

  recognitionList.addFromString(grammar, 1);
  recognition.grammars = recognitionList;
  recognition.lang = "de-AT";

  const getSpeech = (type) => {
    recognition.start();
    console.log("RECOGNITION STARTED");

    recognition.onresult = (event) => {
      let word = event.results[0][0].transcript;
      console.log("TRANSCRIPTION: ", word);
      if (!word) {
        type === "start" ? setStart(false) : setEnd(false);
      } else {
        if (stops.includes(word)) {
          type === "start" ? setStart(word) : setEnd(word);
        } else {
          type === "start" ? setStart(false) : setEnd(false);
        }
      }
    };
  };

  return (
    <div className="routeWrapper mt-5">
      {/* <p>
        Um die gewünschte Route zu berechnen, sagen sie ihren Start- und
        Zielort, nachdem sie die folgenden Schaltflächen drücken.
      </p> */}
      <Button
        variant="primary"
        aria-description="Sprechen sie nach dem Klick"
        onClick={() => getSpeech("start")}
        className="buttonPrimary enterRoute"
      >
        Start-Haltestelle bestimmen
      </Button>
      {start !== "" && (
        <p aria-live="polite" className="text-center">
          {start !== false && start !== "" && `${start} erkannt`}
          {start === false &&
            "Es konnte keine passende Endhaltestelle gefunden werden. Bitte probiere es noch einmal"}
        </p>
      )}
      <Button
        variant="primary"
        aria-description="Sprechen sie nach dem Klick"
        onClick={() => getSpeech("end")}
        className="buttonPrimary enterRoute mt-4"
      >
        End-Haltestelle bestimmen
      </Button>
      {end !== "" && (
        <p aria-live="polite" className="text-center">
          {end !== false && end !== "" && `${end} erkannt`}
          {end === false &&
            "Es konnte keine passende Endhaltestelle gefunden werden. Bitte probiere es noch einmal"}
        </p>
      )}
      {start && end && (
        <Button
          variant="primary"
          className="mb-0 mt-4 submitButton"
          href={`/detail?start=${start}&end=${end}`}
        >
          Route zwischen {start} und {end} berechnen?
        </Button>
      )}
    </div>
  );
}
