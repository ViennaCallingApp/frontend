import Button from "react-bootstrap/Button";
import React, {useState} from 'react';

export default function SelectRoute() {

const [start, setStart] = useState("");
const [end, setEnd] = useState("");
start && console.log("START: ", start);
end && console.log("END: ", end);
let SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
let SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList

let stops = ['Schwedenplatz', 'Siebenhirten', 'Karlsplatz', 'Stephansplatz', 'Hauptbahnhof', 'Praterstern', 'Schottenring', 'Schottentor', 'Schönbrunn', 'Westbahnhof', 'Landstraße', 'Schwedenplatz', 'Reumannplatz', 'Kagran', 'Hütteldorf', 'Ottakring', 'Heiligenstadt', 'Spittelau', 'Volkstheater', 'Rathaus', 'Schottentor', 'Schottenring', 'Praterstern', 'Karlsplatz', 'Stephansplatz', 'Hauptbahnhof', 'Oberlaa']

let grammar = '#JSGF V1.0; grammar stops; public <stops> = ' + stops.join(' | ') + ';';
let recognition = new SpeechRecognition()
let recognitionList = new SpeechGrammarList()

recognitionList.addFromString(grammar, 1)
recognition.grammars = recognitionList
recognition.lang = 'de-AT'

const getSpeech = (type) => {
  recognition.start()
  console.log("RECOGNITION STARTED"); 
  recognition.onnomatch = (event) => {console.log("no match", event)}
    recognition.onresult = (event) => {
    let word = event.results[0][0].transcript
    console.log("TRANSCRIPTION: ", word);
    if(!word) {
      type === 'start' ? setStart(false) : setEnd(false);
        } else {
          if (stops.includes(word)) {
          type === 'start' ? setStart(word) : setEnd(word);
          } else {
            type === 'start' ? setStart(false) : setEnd(false);
          }
        }
      }
    }

  return (
    <div>
      <p>
        Um die gewünschte Route zu berechnen, sagen sie ihren Start- und
        Zielort, nachdem sie die folgenden Schaltflächen drücken.
      </p>
      <Button variant="primary" aria-describedby="Sprechen sie nach dem Klick" onClick={() => getSpeech('start')}>
        Start-Haltestelle bestimmen
      </Button>
      {start !== false && start !== "" && <p>{start} erkannt</p>}
      {start === false && <p>Es konnte keine passende Haltestelle gefunden werden. Bitte probiere es noch einmal</p>}
      <Button variant="primary" aria-describedby="Sprechen sie nach dem Klick" onClick={() => getSpeech('end')}>
        End-Haltestelle bestimmen
      </Button>
    </div>
  );
}
