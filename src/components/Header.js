import React from "react";
import { Parallax } from "react-parallax";

export default function Header() {
  const styles = {
    banner: {
      height: "300px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    },
    title: {
      textAlign: "right",
      alignItems: "center",
      color: "white",
      marginRight: 100
    }
  };
  const url =
    "https://www.cdc.gov/coronavirus/2019-ncov/images/home-banner.jpg";
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={url}
      bgImageAlt="the dog"
      strength={500}
    >
      <div style={styles.banner}>
        <h1 style={styles.title}>Covid-19</h1>
      </div>
    </Parallax>
  );
}
