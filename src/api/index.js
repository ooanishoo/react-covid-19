export const fetchData = async () => {
  const url = "https://covid19.mathdro.id/api";

  // fetch overview data
  const response = await fetch(url);
  const json = await response.json();

  console.log(json.confirmed.value, 'fetchering');

  //fetch list od countries
  const countries = await fetch(json.countries).then((response) =>
    response.json()
  );
  //console.log(countries,'api cntries');

  //return customized data
  return {
    confirmed: json.confirmed.value,
    deaths: json.deaths.value,
    recovered: json.recovered.value,
    countries: countries.countries,
  };
};

// fetch country's data
export const fetchCountryData = async (query) => {
  const url = `https://covid19.mathdro.id/api/countries/${query}`;
  
  const response = await fetch(url);
  const json = await response.json();

  return json;
};
