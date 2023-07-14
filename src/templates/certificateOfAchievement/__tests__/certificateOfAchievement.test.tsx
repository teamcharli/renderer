import { CertificateOfAchievement } from "../certificateOfAchievement";
import { sampleCertificate } from "../fixtures/sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Recommendations } from "../recommendations";

describe("certificateOfAchievement", () => {
  it("should render the certificate provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("Certificate")).toBeInTheDocument();
    expect(getByText("of")).toBeInTheDocument();
    expect(getByText("Achievement")).toBeInTheDocument();
  });
  it("should render with recipient name provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("Steven Koh")).toBeInTheDocument();
  });
  it("should render with programme name provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("You have completed the GovTech Internship Programme.")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 1: mm-ddd-yyyy)", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 2: mm ddd yy)", () => {
    const { getByText } = render(
      <CertificateOfAchievement
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "04 May 20",
            endDate: "07 Oct 20"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 3: mm/ddd/yy)", () => {
    const { getByText } = render(
      <CertificateOfAchievement
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "04/May/20",
            endDate: "07/Oct/20"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 4: ISO-8601)", () => {
    const { getByText } = render(
      <CertificateOfAchievement
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "2020-05-04",
            endDate: "2020-10-07"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the signatory details provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("Evangeline Chua")).toBeInTheDocument();
    expect(getByText("Chief People Officer")).toBeInTheDocument();
  });
  it("should render with recommendations", () => {
    const { getByText } = render(<Recommendations document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("Recommendations")).toBeInTheDocument();
    // Note that the quote here is &rsquo; or ’
    expect(getByText("Here’s what people have to say about Steven:")).toBeInTheDocument();
    // To test for the right decoding of quote (a normal single quote ')
    expect(
      getByText(
        "Steven has managed to build a team culture that is open, autonomous, innovative and progressive within a traditionally bureaucratic environment. It allows motivated and independent people to grow and do their best work. I definitely feel I've experienced the most professional and personal growth in the time I worked with him."
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        "Steven is an empowering leader who is also extremely passionate about engineering excellence and has the know-how to mentor and drive engineers. In our time together at GovTech, he has enabled a period of high personal and professional growth for me through consistent 1-1s with him and having the opportunity to observe him at work with those of his level and even above him. Never one to back down from a fight that needs to happen, he also manages to demonstrate sincere kindness to those around him: ingredients of a powerful leader. His passion for engineering, empowering methods of managing people, and individual engineering competency has served and will continue serve as a role model for me in my career and I’m grateful for the opportunity to have been working with him."
      )
    ).toBeInTheDocument();
  });
  it("should render without recommendations if the document does not have any", () => {
    const document = { ...sampleCertificate };
    delete document["recommendations"];
    const { getByText } = render(<Recommendations document={document} handleObfuscation={() => void 0} />);
    expect(getByText("Recommendations")).toBeInTheDocument();
    expect(getByText("It doesn’t seem like there’s a recommendation for Steven yet. 🙁")).toBeInTheDocument();
  });
});
