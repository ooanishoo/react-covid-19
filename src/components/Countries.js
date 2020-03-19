import React from "react";
import GetStats from "../utils/GetStats";

export default function Countries() {
  const url = "https://corona.lmao.ninja/countries";
  //const url = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
  const data = GetStats(url);

  const styles = {
    container: {
      padding: 8,
      border: 1,
      borderColor: "red",
      borderStyle: "solid",
      margin: 10
    }
  };

  if (!data) return <div>Loading...</div>;
  const countries = data;
  //const countries = data.locations;
  console.log(countries.length);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Countries Data</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          margin: "auto",
          width: "90%",
          flexWrap:"wrap"
        }}
      >
        {countries.map(country => (
          <div style={styles.container}>
            <h3>{country.country}</h3>
            <p>Deaths :{country.deaths}</p>
            <p>Critical :{country.critical}</p>
            <p>Recovered :{country.recovered}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}
