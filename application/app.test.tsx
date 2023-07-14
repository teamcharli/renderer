import { App } from "./app";
import { sampleCertificate as certificateOfAchievement } from "../src/templates/certificateOfAchievement/fixtures/sample";
import { sampleCertificate as geekOut2020 } from "../src/templates/geekOut/geekOut2020/fixtures/sample";
import { championSampleCertificate as geekOut2021 } from "../src/templates/geekOut/geekOut2021/fixtures/sample";
import { CovidLetterOfAppreciationSampleData as covidLetterOfAppreciation } from "../src/templates/covidAppreciationLetter/fixtures/sample";

import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("application", () => {
  it("should render table of contents for certificates", () => {
    const { getByText } = render(
      <App
        documents={[
          { name: "GovTech document - Certificate of Achievement", document: certificateOfAchievement },
          { name: "GovTech document - GeekOut 2020", document: geekOut2020 },
          { name: "GovTech document - GeekOut 2021", document: geekOut2021 },
          { name: "GovTech document - Covid Appreciation Letter", document: covidLetterOfAppreciation }
        ]}
      />
    );
    const documentContent1 = getByText("GovTech document - Certificate of Achievement");
    expect(documentContent1).toBeVisible();
    expect(getByText("GovTech document - GeekOut 2020")).toBeVisible();
    fireEvent.click(documentContent1);
    expect(documentContent1.className).toStrictEqual("document active");
  });
});
