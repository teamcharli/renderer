import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import styled from "@emotion/styled";
import { CovidLetterOfAppreciationInterface } from "./types";
import govTechLogo from "./img/GovtechLogo.jpg";
import ceoSignature from "./img/CEOSignature.jpg";

const Container = styled.div`
  @media (max-width: 767px) {
    .template-container {
      padding: 15px 20px;
      max-width: 210mm;
      height: auto;
    }

    .template-header {
      text-align: center;
      img {
        margin-top: 30px;
        width: 70%;
      }
    }

    .main-content {
      width: 100%;
    }

    .template-footer {
      position: block;
    }
  }

  @media (min-width: 768px) {
    .template-container {
      padding: 35px 70px;
      max-width: 210mm;
      height: 297mm;
    }

    .template-header {
      text-align: right;
      img {
        width: 30%;
      }
    }

    .main-content {
      width: 90%;
    }

    .template-footer {
      position: absolute;
      bottom: 50px;
    }
  }

  .template-container {
    display: block;
    position: relative;
    background-color: white;
    color: black;
    font-family: "Arial";
    font-size: 12pt;

    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .recipient-table {
    margin-top: 68px;

    p {
      margin: 0px 0px 5px 0px;
      line-height: 16pt;
    }
  }

  .main-content {
    word-spacing: 1px;
    margin-top: 38px;

    p {
      line-height: 16pt;
      margin-top: 25px;
    }

    p:nth-of-type(2) {
      margin: 21px 0px 21px 0px;
    }

    img {
      margin-top: 15px;
      margin-bottom: 10px;
    }

    p:last-child {
      margin-top: 5px;
    }
  }

  .signature-section p {
    margin: 0px;

    p:last-child {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }

  .template-footer {
    font-size: 8pt;
    line-height: 9.65pt;
    letter-spacing: 1px;
    color: #595a5a;

    p:nth-of-type(1) {
      color: #3fb4f0;
    }

    p span {
      color: #3fb4f0;
      margin-right: 5px;
    }

    .issue-date {
      margin-top: 38px;
    }
  }

  @media print {
    .template-container {
      box-shadow: none;
      margin: 0;
      border: none;
    }
  }

  @page {
    margin: 0;
  }
`;
export const CovidLetterOfAppreciationTemplate: FunctionComponent<TemplateProps<CovidLetterOfAppreciationInterface> & {
  className?: string;
}> = ({ document }) => {
  const recipientName = document.recipient.name;
  const recipientFirstName = document.recipient.firstName;
  const recipientDivision = document.recipient.division;
  const issuedOn = document.issuedOn;

  return (
    <Container>
      <div className="template-container">
        <div className="template-header">
          <img src={govTechLogo} alt="GovTech Logo" />
        </div>
        <div className="recipient-table">
          <p>{recipientName}</p>
          <p>{recipientDivision}</p>
          <p>Government Technology Agency</p>
        </div>
        <p className="issue-date">{issuedOn}</p>
        <div className="main-content">
          <p>Dear {recipientFirstName},</p>
          <p>THANK YOU FOR GOING THE EXTRA MILE</p>
          <p>
            It has been said many times and many ways that 2020 was an extraordinary year; the GovTech Leadership Team
            cannot agree more with that. In these early days of Phase 3, the Leadership Team and I would like to take
            this opportunity to sincerely thank you for your contribution beyond the call of duty in the past year, to
            get us here.
          </p>
          <p>
            Whilst the year had brought its challenges, we also appreciate that 2020 brought out the best in all of us.
            Embracing our ABC values has kept us laser focused on our mission of materializing a digital government,
            even while playing our part in dealing with the pandemic and keeping each other and our fellow Singaporeans
            safe.
          </p>
          <p>
            There is still a long journey ahead of us as we move into Phase 3 and beyond, we urge you to adopt a
            holistic view on your well-being; mind and body. We have lots more to accomplish in 2021, leveraging from a
            vantage position of COVID-19 induced digital gains.
          </p>
          <p>Meanwhile, remain safe. Onwards and upwards. Thank you.</p>

          <div className="signature-section">
            <img className="signature" src={ceoSignature} alt="CEO Signature" />
            <p>Kok Ping Soon</p>
            <p>Chief Executive</p>
          </div>
        </div>

        <div className="template-footer">
          <p>tech.gov.sg</p>
          <p>
            GOVERNMENT TECHNOLOGY AGENCY <br />
            10 Pasir Panjang Road #10-01 <br />
            Mapletree Business City, Singapore 117438 <br />
            <span>T</span> +65 6211 0888 <br />
            <span>E</span> info@tech.gov.sg <br />
          </p>
        </div>
      </div>
    </Container>
  );
};
