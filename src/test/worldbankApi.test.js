import { getIndicatorData } from "../services/worldbankApi";
import '@testing-library/jest-dom';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {},
        [
          { date: "2022", value: 100 },
          { date: "2021", value: 90 }
        ]
      ])
  })
);

test("fetches indicator data correctly", async () => {

  const data = await getIndicatorData("USA", "NY.GDP.MKTP.CD");

  expect(data.length).toBeGreaterThan(0);
  expect(data[0]).toHaveProperty("date");
  expect(data[0]).toHaveProperty("value");

});