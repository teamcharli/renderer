import { GeekOutV2 } from "../geekOutV2";
import { championSampleCertificate } from "../fixtures/sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("geekOut2020", () => {
  it("should render with certificate", () => {
    const { getByText } = render(<GeekOutV2 document={championSampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("Vaithiyanathan Sri Kesava Raman")).toBeInTheDocument();
    expect(getByText("Great job on your outstanding performance!")).toBeInTheDocument();
    expect(getByText("D N Prasad")).toBeInTheDocument();
    expect(getByText("Senior Director")).toBeInTheDocument();
    expect(getByText("Strategy, People and Organisation")).toBeInTheDocument();
  });

  it("should render with the start and end date provided by the document (format: yyyy-mm-dd)", () => {
    const { getByText } = render(
      <GeekOutV2
        document={{
          ...championSampleCertificate,
          programme: {
            ...championSampleCertificate.programme,
            startDate: "2022-06-13",
            endDate: "2022-06-17"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("13 Jun 2022 - 17 Jun 2022")).toBeInTheDocument();
  });
});
