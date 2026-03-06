import { render, screen } from "@testing-library/react";
import CountryFilter from "../components/CountryFilter";
import '@testing-library/jest-dom';

test("renders country filter dropdown", () => {

  render(<CountryFilter setCountry={() => {}} />);

  const select = screen.getByLabelText(/country/i);

  expect(select).toBeInTheDocument();
});