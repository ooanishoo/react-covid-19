import React from "react";
import GetStats from "../utils/GetStats";

export default function Overview() {
  //const url = "https://corona.lmao.ninja/all";
  const url = "https://covid19.mathdro.id/api";
  const data = GetStats(url);

  const styles = {
    container: {
      backgroundColor: "#12191E",
      color:"white"
    },
    title: { textAlign: "center", marginTop:0, paddingTop:10 , color:"#F5F5F5"},
    cases: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
      backgroundColor: "#12191E"
    },
    case: {
    },
    confirmed:{
      color:"#FFC108",
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
        <h1 style={styles.title}>Overview</h1>
      </div>
      <div style={styles.cases}>
        <div style={styles.confirmed}>
          <h3 style={styles.confirmed}>Confirmed</h3>
          <h1 style={styles.confirmed}>{data.confirmed.value}</h1>
        </div>
        <div style={styles.deaths}>
          <h3 style={styles.deaths}>Deaths</h3>
          <h1 style={styles.deaths}>{data.deaths.value}</h1>
        </div>
        <div style={styles.recovered}>
          <h3 style={styles.recovered}>Recovered</h3>
          <h1 style={styles.recovered}>{data.recovered.value}</h1>
        </div>
        {/* <div>
          <h3>Updated</h3>
          <span>{data.updated}</span>
        </div> */}
      </div>
    </div>
  );
}
