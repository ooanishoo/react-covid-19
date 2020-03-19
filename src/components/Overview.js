import React from "react";
import GetStats from "../utils/GetStats";

export default function Overview() {
  const url = "https://corona.lmao.ninja/all";
  const data = GetStats(url);

  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Overview</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <div>
          <h3>Cases</h3>
          <span>{data.cases}</span>
        </div>
        <div>
          <h3>Deaths</h3>
          <span>{data.deaths}</span>
        </div>
        <div>
          <h3>Recovered</h3>
          <span>{data.recovered}</span>
        </div>
        <div>
          <h3>Updated</h3>
          <span>{data.updated}</span>
        </div>
      </div>
    </div>
  );
}
