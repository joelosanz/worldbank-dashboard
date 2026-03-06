import { useState, useEffect } from "react";
import ChartComponent from "./ChartComponent";
import CountryFilter from "./CountryFilter";
import { getIndicatorData } from "../services/worldbankApi";

function Dashboard() {

  const [country, setCountry] = useState("USA");
  const [gdpData, setGdpData] = useState([]);
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [country]);

  const fetchData = async () => {

    const gdp = await getIndicatorData(country, "NY.GDP.MKTP.CD");
    const population = await getIndicatorData(country, "SP.POP.TOTL");

    setGdpData(gdp);
    setPopulationData(population);
  };

  return (
    <div className="dashboard">

      <CountryFilter setCountry={setCountry} />

      <div className="charts">

        <ChartComponent
          title="GDP"
          data={gdpData}
        />

        <ChartComponent
          title="Population"
          data={populationData}
        />

      </div>

    </div>
  );
}

export default Dashboard;