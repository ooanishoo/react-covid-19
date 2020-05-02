import React, { useState, useEffect } from "react";
import { Card, Avatar, Select, Skeleton } from "antd";
import "antd/dist/antd.css";
import { fetchCountryData } from "../api";

const { Meta } = Card;
const { Option } = Select;

export default function Countries({ countries }) {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState({});

  const { confirmed = 0, deaths = 0, recovered = 0 } = country;
  const [isLoading, setIsLoading] = useState(false);

  const styles = {
    header: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "auto",
      width: "90%",
    },
    title: { textAlign: "center", marginTop: 20, marginLeft: 5 },
    selector: {
      display: "flex",
      justifyContent: "center",
      marginLeft: 5,
      marginRight: 5,
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: "auto",
      width: "90%",
      flexWrap: "wrap",
    },
    card: {
      margin: 'auto',
      width: '70%',
    },
  };

  function onChange(value) {
    console.log(`selected country ${value}`);
    setSearch(value);
  }

  // fetch a country's data on search
  useEffect(() => {
    console.log(search, "search is");
    if (search.trim !== "") {
      setIsLoading(true);

      setTimeout(() => {
        fetchCountryData(search)
          .then(
            (data) => setCountry(data)
            //(data) => console.log({ data })
          )
          .finally(setIsLoading(false));
      }, 100);
    }
  }, [search]);

  return (
    <div>
      <div style={styles.header}>
        <div style={styles.title}>
          <h1>Countries Data</h1>
        </div>
        <div style={styles.selector}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search Country"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {countries.map(({ name, iso2 }) => (
              <Option key={name} value={name}>
                {name}
              </Option>
            ))}
          </Select>
          ,
        </div>
      </div>
      <Card
        style={styles.card}
        actions={[
          <p>
            Confirmed
            <br />
            {confirmed.value}
          </p>,
          <p>
            Deaths
            <br />
            {deaths.value}
          </p>,
          <p>
            Recovered
            <br />
            {recovered.value}
          </p>,
        ]}
      >
        {isLoading ? (
          <Skeleton active paragraph={{ rows: 2 }} />
        ) : (
          <Meta
            avatar={
              <Avatar src="https://www.countryflags.io/{country}/flat/64.png" />
            }
            title={search}
            description="This is the description"
          />
        )}
      </Card>
    </div>
  );
}
