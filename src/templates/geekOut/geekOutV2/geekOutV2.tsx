import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { format } from "date-fns";
import { GeekOutCertificateTemplateV2 } from "./types";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { getBackgroundImage } from "../utils";

const Container = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  width: 297mm;
  height: 210mm;
  position: relative;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);

  @media print {
    margin: 0px;
    box-shadow: none;
    overflow: hidden;
  }

  #background-image {
    position: absolute;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    bottom: 0px;
    height: 100%;
    width: 100%;
  }

  #recipient-detail {
    position: absolute;
    z-index: 1;
    top: 210px;
    left: 560px;
    width: 494px;
    height: 160px;
    color: #4b5054;

    p {
      position: relative;
      width: 100%;
      margin: 0px;
      text-align: right;
      font-size: 35pt;
      font-family: "lucida-sans";
      font-weight: 600;
      font-style: italic;
      color: #4b5054;
    }

    #message {
      padding-top: 10px;
      text-align: right;
      font-size: 20px;
    }
  }

  .signatory {
    position: absolute;
    top: 365px;
    left: 832px;
    font-size: 20px;

    img {
      max-width: 250px;
      display: block;
      width: 100%;
      margin-left: -30px;
      padding-bottom: 10px;
    }

    #signatory-position {
      font-size: 17px;
    }

    #signatory-organisation {
      font-size: 17px;
    }
  }

  #date-range {
    position: absolute;
    bottom: 35px;
    right: 25px;
    width: 380px;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
  }
`;

const processInputDate = (input: string): string => {
  try {
    return format(new Date(input), "d MMM yyyy");
  } catch (e) {
    console.error(`Date ${input} is not in ISO format try something like 2020-10-12.`);
    return "";
  }
};

export const GeekOutV2: FunctionComponent<TemplateProps<GeekOutCertificateTemplateV2>> = ({ document }) => {
  const backgroundImage = getBackgroundImage(document.type, true);
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
          }
        `}
      />
      <Container id="geekout-cert">
        <div id="background-image" style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div id="recipient-detail">
          <p>{document.recipient.name}</p>
          <div id="message">{document.message}</div>
        </div>
        <div className="signatory">
          <img src={document.signatory.signature} />
          <strong id="signatory-name">{document.signatory.name}</strong>
          <div id="signatory-position">{document.signatory.position}</div>
          <div id="signatory-organisation">{document.signatory.organisation}</div>
        </div>
        <div id="date-range">
          {processInputDate(document.programme.startDate)} - {processInputDate(document.programme.endDate)}
        </div>
      </Container>
    </>
  );
};
