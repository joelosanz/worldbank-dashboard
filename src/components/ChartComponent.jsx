import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { Legend } from "recharts";
const formatNumber = (num) => {
  if (!num) return 0;

  if (num >= 1e12) return (num / 1e12).toFixed(1) + "T";
  if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
  if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";

  return num;
};

function ChartComponent({ title, data, type }) {

  const Chart = type === "line" ? LineChart : BarChart;

  return (
    <div className="chart-card">

      <h2>{title}</h2>

      <ResponsiveContainer width="100%" height={300}>

        <Chart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />
          <Legend />

          <YAxis tickFormatter={formatNumber}/>

          <Tooltip />

          {type === "line" ? (
            <Line type="monotone" dataKey="value" stroke="#4ade80" />
          ) : (
            <Bar dataKey="value" fill="#4ade80" />
          )}

        </Chart>

      </ResponsiveContainer>

    </div>
  );
}

export default ChartComponent;