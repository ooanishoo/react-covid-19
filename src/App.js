import React, { useState, useEffect } from "react";
import Overview from "./components/Overview";
import Countries from "./components/Countries";
import Header from "./components/Header";
import { fetchData } from "./api";

export default function App() {
  const [state, setState] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    countries: [],
  });
  useEffect(() => {
    fetchData().then(({ confirmed, deaths, recovered, countries }) => {
      setState({
        confirmed,
        deaths,
        recovered,
        countries,
      });
    });
  }, []);

  console.log(state, "state obj");

  return (
    <div>
      <Header />
      <Overview {...state} />
      <Countries {...state}/>
    </div>
  );
}
