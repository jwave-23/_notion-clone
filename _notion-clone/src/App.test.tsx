import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom"


describe("App", () => {
    it("renders headline", () => {
        render(<App />);

        //check if App components renders headline
        expect(screen.getByRole("heading")).toHaveTextContent("React");
    });
    
});