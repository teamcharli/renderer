import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { containerCustom } from "./utils/styles";
import { GovTechCertificateTemplate } from "./types";

const container = css`
  ${containerCustom()};
`;

const recommendationsSectionHeading = css`
  line-height: 1.33333;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 24px;
`;

const recommendationsListItem = css`
  position: relative;
  background-color: #f9f9f9;
  border-left: 8px solid #ccc;
  margin: 30px 0;
  padding: 20px 15px;

  cite {
    color: #888;
    font-size: 18px;
  }
`;

const recommendationsContent = css`
  position: relative;
  padding: 20px 30px;

  &::before,
  &::after {
    position: absolute;
    color: #ccc;
    font-size: 60px;
    line-height: 1;
  }

  &::before {
    content: open-quote;
    top: 0;
    left: 0;
  }

  &::after {
    content: close-quote;
    bottom: 0;
    right: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 21px;
    color: #555;
    line-height: 1.5;
  }
`;

export const Recommendations: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const numberOfRecommendations = document.recommendations?.length ?? 0;
  // show a different message when there are no recommendations
  const display =
    numberOfRecommendations > 0 ? (
      <>
        <div css={recommendationsSectionHeading}>
          Here&rsquo;s what people have to say about {document.recipient.firstName}:
        </div>
        {document.recommendations?.map(item => {
          if (item.recommendation) {
            return (
              <blockquote css={recommendationsListItem} key={item.recommendation}>
                <div css={recommendationsContent}>
                  <p>{item.recommendation}</p>
                </div>
                <cite>&mdash; {item.name}</cite>
              </blockquote>
            );
          }
        })}
      </>
    ) : (
      <div>It doesn&rsquo;t seem like there&rsquo;s a recommendation for {document.recipient.firstName} yet. 🙁</div>
    );

  return (
    <>
      <div css={container} className={className} id="recommendations">
        <h2>Recommendations</h2>
        {display}
      </div>
    </>
  );
};
