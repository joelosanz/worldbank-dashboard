import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function ChartComponent({ title, data }) {

  return (
    <div className="chart-card">

      <h2>{title}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.slice(-10)}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("en", {
                notation: "compact"
              }).format(value)
            }
          />

          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat().format(value)
            }
          />

          <Bar dataKey="value" fill="#4ade80" />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ChartComponent;