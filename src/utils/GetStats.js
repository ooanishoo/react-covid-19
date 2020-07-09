import { useState, useEffect } from "react";

export default function GetStats(url) {
  const [data, setData] = useState();

  async function fetchData() {
    const results = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setData(results);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return data;
}
