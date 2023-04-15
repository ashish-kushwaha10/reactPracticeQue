import React, { useEffect, useState } from "react";
import { fakeFetch } from "../backend/response";

console.log("1234", fakeFetch("https://example.com/api/weather"));
export default function Weather(props) {
  let tempUnit, switchBtn;

  const [data, setData] = useState({});
  const [loading, setloading] = useState(true);
  const [consersionCondition, setconsersionCondition] = useState(true);
  if (consersionCondition) {
    switchBtn = "switch to FarenHite";
    tempUnit = "°C";
  } else {
    switchBtn = "switch to cencius";
    tempUnit = "°F";
  }

  async function fetchData() {
    let res = await fakeFetch("https://example.com/api/weather");
    console.log("response", res);

    if (res.status === 200) {
      setData(res.data);
    }
    setloading(false);
  }

  useEffect(() => {
    console.log("inside useEffect");
    fetchData();
  }, []);

  function switchBtnHandler() {
    setconsersionCondition(!consersionCondition);
  }
  return (
    <React.Fragment>
      <h1>weather</h1>
      {loading ? <p>content is loading....</p> : ""}
      {Object.keys(data).length > 0 && (
        <>
          <p>
            temperature:
            {consersionCondition
              ? data.temperature
              : (data.temperature * 1.8 + 32).toFixed(2)}{" "}
            {tempUnit}
          </p>
          <p>humidity:{data.humidity} </p>
          <p>windSpeed:{data.windSpeed} m/s</p>
          <button onClick={switchBtnHandler}>{switchBtn}</button>
        </>
      )}
    </React.Fragment>
  );
}
