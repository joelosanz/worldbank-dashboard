import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ChartComponent from "../components/ChartComponent";

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }) => children,
  BarChart: ({ children }) => <div>{children}</div>,
  Bar: () => <div>Bar</div>,
  XAxis: () => <div>XAxis</div>,
  YAxis: () => <div>YAxis</div>,
  Tooltip: () => <div>Tooltip</div>,
  CartesianGrid: () => <div>Grid</div>   // ⭐ ESTA LÍNEA FALTABA
}));

describe("ChartComponent", () => {

  it("renders chart without crashing", () => {

    const fakeData = [
      { date: "2020", value: 100 },
      { date: "2021", value: 200 }
    ];

    render(<ChartComponent title="Test Chart" data={fakeData} />);

    expect(true).toBe(true);

  });

});