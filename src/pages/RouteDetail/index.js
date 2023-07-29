import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function RouteDetail() {
  const [description, setDescription] = useState();
  const [params] = useSearchParams();
  const start = params.get("start");
  const end = params.get("end");
  console.log("start", start, end);

  useEffect(() => {
    // fetch("/asdfasdf")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((description) => {
    //     setDescription(description);
    //   });
  });

  return (
    <div className="wrapper">
      {!description && <p>Route wird berechnet...</p>}
      {description && <section>TODO</section>}
    </div>
  );
}
