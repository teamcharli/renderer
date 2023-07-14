import { GeekOut2020 } from "../geekOut2020";
import { sampleCertificate } from "../fixtures/sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("geekOut2020", () => {
  it("should render with certificate", () => {
    const { getByText } = render(<GeekOut2020 document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("Congratulations")).toBeInTheDocument();
    expect(getByText("Alice Tan")).toBeInTheDocument();
    expect(getByText("for successfully completing GeekOut 2020!")).toBeInTheDocument();
    expect(getByText("Accept nothing less than your goals!")).toBeInTheDocument();
    expect(getByText("Chan Cheow Hoe")).toBeInTheDocument();
    expect(getByText("Deputy Chief Executive")).toBeInTheDocument();
  });

  it("should render with the start and end date provided by the document (format: yyyy-mm-dd)", () => {
    const { getByText } = render(
      <GeekOut2020
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "2020-10-12",
            endDate: "2020-10-14"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("12 Oct 2020 to 14 Oct 2020")).toBeInTheDocument();
  });
});
