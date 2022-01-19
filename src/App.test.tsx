import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

test("checks if list renders", () => {
    render(<App />);
    const linkElement = screen.getByText(/offers/i);
    expect(linkElement).toBeInTheDocument();
});
