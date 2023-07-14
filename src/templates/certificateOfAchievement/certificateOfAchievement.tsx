import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { format } from "date-fns";
import certificateBase from "../../core/certificate-base.png";
import { containerCustom } from "./utils/styles";
import { GovTechCertificateTemplate } from "./types";

// setting width explicitly, due to how bg image's composition is prepped
const container = css`
  ${containerCustom()};
  color: #4e4e50;
  text-align: center;
  width: 1280px;

  @media print {
    @page {
      size: landscape;
    }
  }
`;

// setting width explicitly, due to how bg image's composition is prepped
const imageRegion = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 1280px;
`;

const textRegion = css`
  display: inline-block;
  text-align: center;
  margin-top: 270px;
  margin-left: 190px;
`;

const documentTitle = css`
  font-size: 48px;
  position: relative;
  text-transform: uppercase;
  font-variant: small-caps;
  color: #b31e8e;
  font-weight: bold;
`;

const documentTitleSmaller = css`
  font-size: 32px;
`;

interface DocumentTitleProps {
  title: string;
}

const DocumentTitle: FunctionComponent<DocumentTitleProps> = ({ title }) => {
  // From https://data.grammarbook.com/blog/capitalization/capitalizing-composition-titles-part-ii/
  const list = ["of"];
  return (
    <div id="document-title" css={documentTitle}>
      {title.split(" ").map(function(word) {
        if (list.includes(word)) {
          return (
            <span key={word} css={documentTitleSmaller}>
              {word}{" "}
            </span>
          );
        } else {
          return <span key={word}>{word} </span>;
        }
      })}
    </div>
  );
};

const recipientName = css`
  font-size: 40px;
  font-style: italic;
  margin-bottom: 16px;
`;

const programmeName = css`
  font-size: 24px;
  margin-bottom: 16px;
`;

const dateRange = css`
  font-size: 20px;
  margin-bottom: 64px;
`;

const signature = css`
  max-height: 120px;
`;

const signatory = css`
  font-size: 20px;
`;

export const CertificateOfAchievement: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <>
      <div css={container} className={className} id="certificate-of-achievement">
        <div css={textRegion}>
          <DocumentTitle title={document.name} />
          <div id="programme-name" css={programmeName}>
            Achievement unlocked! Way to go!
          </div>

          <div id="recipient-name" css={recipientName}>
            {document.recipient.firstName} {document.recipient.lastName}
          </div>

          <div id="programme-name" css={programmeName}>
            You have completed the {document.programme.name}.
          </div>

          <div id="date-range" css={dateRange}>
            {format(new Date(document.programme.startDate), "d MMM yyyy")} to{" "}
            {format(new Date(document.programme.endDate), "d MMM yyyy")}
          </div>

          <img css={signature} src={document.signatory.signature} />
          <div css={signatory}>
            <strong id="signatory-name">{document.signatory.name}</strong>
          </div>
          <div id="signatory-position" css={signatory}>
            {document.signatory.position}
          </div>
        </div>
        <img css={imageRegion} src={certificateBase} />
      </div>
    </>
  );
};
