export async function getIndicatorData(country, indicator) {
  try {
    const response = await fetch(
      `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json`
    );

    const data = await response.json();

    return data[1]
      .slice(0, 10)
      .filter((item) => item.value !== null)
      .map((item) => ({
        date: item.date,
        value: item.value
      }))
      .reverse();
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
}