import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Komponent from "./Komponent";

describe("Komponent", () => {
  it("skriver ut en overskrift og en underoverskrift", () => {
    render(<Komponent tittel="overskrift" undertittel="underskrift" />);
    expect(screen.getByRole("heading")).toBeDefined();
    expect(screen.getByRole("heading").textContent).toEqual("overskrift");
    expect(screen.getByText("underskrift")).toBeDefined();
  });
});
