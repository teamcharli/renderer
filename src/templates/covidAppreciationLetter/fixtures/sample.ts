import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { CovidLetterOfAppreciationInterface } from "../types";

export const CovidLetterOfAppreciationSampleData: CovidLetterOfAppreciationInterface = {
  recipient: {
    name: "Steven Koh",
    firstName: "Steven",
    division: "GDS"
  },
  issuers: [
    {
      name: "GovTech Singapore"
    }
  ],
  issuedOn: "01 March 2021",
  $template: {
    name: "COVID_LETTER_OF_APPRECIATION_2021",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
