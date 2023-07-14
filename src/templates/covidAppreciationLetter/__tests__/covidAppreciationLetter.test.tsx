import { CovidLetterOfAppreciationTemplate } from "../template";
import { CovidLetterOfAppreciationSampleData } from "../fixtures/sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("covidAppreciationLetter", () => {
  it("should render with certificate", () => {
    const { getByText } = render(
      <CovidLetterOfAppreciationTemplate
        document={CovidLetterOfAppreciationSampleData}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("Steven Koh")).toBeInTheDocument();
    expect(getByText("GDS")).toBeInTheDocument();
    expect(getByText("Dear Steven,")).toBeInTheDocument();
    expect(getByText("Kok Ping Soon")).toBeInTheDocument();
  });
});
