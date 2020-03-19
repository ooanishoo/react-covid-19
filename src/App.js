import React from "react";
import Overview from "./components/Overview";
import Countries from "./components/Countries";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Overview />
      <Countries />
    </div>
  );
}
