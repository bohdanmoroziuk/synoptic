export default async function fetchLocationId(query: string) {
  const response = await fetch(`https://www.metaweather.com/api/location/search/?query=${query}`);
  const locations = await response.json();

  return locations[0].woeid;
}
