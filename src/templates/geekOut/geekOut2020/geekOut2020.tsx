import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { format } from "date-fns";
import { GeekOutCertificateTemplate } from "./types";
import certificateBase from "../../../core/geekout-certificate-base.png";
import styled from "@emotion/styled";

const Container = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  position: relative;
  width: 1280px;
  height: 884px;
  font-size: 22px;
  margin-left: auto;
  margin-right: auto;
  @media print {
    @page {
      size: landscape;
    }
  }

  .bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    max-width: 100%;
  }

  .text-region {
    position: absolute;
    bottom: 50px;
    right: 60px;
    text-align: right;
    color: #4d4d4d;
  }

  .recipient-details {
    max-width: 500px;
    margin-left: auto;
  }

  .recipient-name {
    font-size: 36px;
    font-style: italic;
    font-weight: 400;
  }

  .quote {
    font-size: 28px;
  }

  .signatory {
    margin-right: 400px;
    font-size: 20px;

    img {
      max-width: 250px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .date {
    color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -450px;
    margin-top: -16px;
  }

  .text-blue {
    color: #30509b;
  }

  .text-orange {
    color: #f47921;
  }

  .text-center {
    text-align: center;
  }
`;

export const GeekOut2020: FunctionComponent<TemplateProps<GeekOutCertificateTemplate>> = ({ document }) => {
  const processInputDate = (input: string): string => {
    try {
      return format(new Date(input), "d MMM yyyy");
    } catch (e) {
      console.error(`Date ${input} is not in ISO format try something like 2020-10-12.`);
      return "";
    }
  };
  return (
    <>
      <Container id="geekout-cert">
        <img className="bg-pattern" src={certificateBase} />
        <div className="date" id="date-range">
          {processInputDate(document.programme.startDate)} to {processInputDate(document.programme.endDate)}
        </div>
        <div className="text-region">
          <div className="recipient-details">
            <div id="congratulations">Congratulations</div>
            <h1 className="text-blue recipient-name" id="recipient-name">
              {document.recipient.name}
            </h1>
            <div id="programme-name">for successfully completing {document.programme.name}!</div>
          </div>
          <h3 className="text-orange quote" id="quote">
            <strong>Accept nothing less than your goals!</strong>
          </h3>
          <div className="signatory text-center">
            <img src={document.signatory.signature} />
            <strong id="signatory-name">{document.signatory.name}</strong>
            <div id="signatory-position">{document.signatory.position}</div>
          </div>
        </div>
      </Container>
    </>
  );
};
