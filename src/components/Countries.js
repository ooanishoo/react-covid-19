import React from "react";
import GetStats from "../utils/GetStats";
import { Card, Avatar, Select, Skeleton } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;
const { Option } = Select;

export default function Countries() {
  const url = "https://corona.lmao.ninja/countries";
  //const url = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
  const url2 = "https://covid19.mathdro.id/api/countries";
  const data = GetStats(url);
  const data2 = GetStats(url2);
  console.log(data2);

  const styles = {
    wrapper: { textAlign: "center", marginTop: 20},
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      margin: "auto",
      width: "90%",
      flexWrap: "wrap"
    },
    card: {
      margin: 5,
      width: 300
    },
    selector: {
      display: "flex",
      justifyContent: "center"
    }
  };

  function onChange(value) {
    console.log(`selected country ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("searching country :", val);
  }

  if (!data)
    return (
      <div>
        <div style={styles.wrapper}>
          <h1>Countries Data</h1>
        </div>
        <div style={styles.container}>
          {[...Array(186)].map((e, i) => (
            <Card style={styles.card}>
              <Skeleton active avatar />
            </Card>
          ))}
          });
        </div>
      </div>
    );
  const countries = data;
  return (
    <div>
      <div style={styles.wrapper}>
        <h1>Countries Data</h1>
      </div>
      <div style={styles.selector}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a country"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {Object.entries(data2.countries).map(([country, code]) => {
            return <Option value={code}>{country}</Option>;
          })}
        </Select>
      </div>
      <div style={styles.container}>
        {countries.map(country => (
          <Card
            style={styles.card}
            actions={[
              <p>
                Deaths <p>{country.deaths}</p>
              </p>,
              <p>
                Critical <p>{country.critical}</p>
              </p>,
              <p>
                Recovered <p>{country.recovered}</p>
              </p>
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://www.countryflags.io/be/flat/64.png" />
              }
              title={country.country}
              description="This is the description"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
