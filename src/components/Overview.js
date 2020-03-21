import React from "react";
import GetStats from "../utils/GetStats";

export default function Overview() {
  //const url = "https://corona.lmao.ninja/all";
  const url = "https://covid19.mathdro.id/api";
  const data = GetStats(url);

  const styles = {
    container: {
      backgroundColor: "#2F1F1F1",
      color:"white"
    },
    title: { textAlign: "center", marginTop:0, paddingTop:10 },
    cases: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
      backgroundColor: "#F1F1F1"
    },
    case: {
    },
    confirmed:{
      color:"#F98705",
      textAlign: "center"
    },
    deaths:{
      color:"#DC3545",
      textAlign: "center"
    },
    recovered:{
      color:"#28A745",
      textAlign: "center"
    }
  };

  if (!data) return <div>Loading...</div>;
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h1>Overview</h1>
      </div>
      <div style={styles.cases}>
        <div style={styles.confirmed}>
          <p>Confirmed</p>
          <h1>{data.confirmed.value}</h1>
        </div>
        <div style={styles.deaths}>
          <p>Deaths</p>
          <h1>{data.deaths.value}</h1>
        </div>
        <div style={styles.recovered}>
          <p>Recovered</p>
          <h1>{data.recovered.value}</h1>
        </div>
        {/* <div>
          <h3>Updated</h3>
          <span>{data.updated}</span>
        </div> */}
      </div>
    </div>
  );
}
