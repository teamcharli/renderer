import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import styled from "@emotion/styled";
import { CertificateofServiceInterface } from "./types";
import certBG from "./img/COS-bg.png";

const Container = styled.div`
  .template-container {
    display: block;
    position: relative;
    background-size: contain;

    max-width: 210mm;
    max-height: 297mm;
    width: 100%;
    height: 141vw;
    margin: auto;
    box-sizing: border-box;
    border: 1px solid #444;
    padding: clamp(1mm, 45vw, 100mm) clamp(5mm, 9.52vw, 20mm);
    text-align: center;

    font-family: "Times New Roman", Times, serif;
    color: black;
    font-size: clamp(1pt, 3.33vw, 20pt);
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .certify-line,
  .award-line {
    font-style: italic;
  }

  .certify-line {
    margin-top: clamp(1mm, 7.1vw, 15mm);
  }

  .recipient {
    margin-top: clamp(1mm, 7.1vw, 15mm);
    font-weight: bold;
  }

  .award-line {
    margin-top: clamp(1mm, 14.2vw, 30mm);
  }

  .signature-date {
    margin-top: clamp(1mm, 23.8vw, 50mm);
    margin-left: clamp(1mm, 4.8vw, 10mm);
    font-size: clamp(1pt, 2vw, 12pt);
    font-weight: bold;
    position: absolute;
  }

  @media print {
    .template-container {
      box-shadow: none;
      margin: 0;
      border: none;
      width: 200mm;
      height: 282mm;
      font-size: 19pt;
      padding: 100mm 20mm;
    }
    .certify-line {
      margin-top: 14mm;
    }
    .recipient {
      margin-top: 14mm;
    }

    .award-line {
      margin-top: 29mm;
    }
    .signature-date {
      margin-top: 47mm;
      margin-left: 9mm;
      font-size: 11pt;
    }
  }

  @page {
    margin: 0;
  }
`;
export const CertificateOfServiceTemplate: FunctionComponent<TemplateProps<CertificateofServiceInterface> & {
  className?: string;
}> = ({ document }) => {
  const recipientName = document.recipient.name;
  const recipientRank = document.recipient.rank;
  const issuedOn = document.issuedOn;

  return (
    <Container>
      <div className="template-container">
        <img className="background" src={certBG} />
        <p className="certify-line">This is to certify that</p>
        <p className="recipient">
          {recipientRank} {recipientName}
        </p>
        <p className="award-line">
          has completed Full-Time National Service <br />
          on {issuedOn}
        </p>
        <p className="signature-date">{issuedOn}</p>
      </div>
    </Container>
  );
};
