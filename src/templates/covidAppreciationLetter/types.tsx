import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CovidLetterOfAppreciationInterface extends v2.OpenAttestationDocument {
  recipient: {
    name: string;
    firstName: string;
    division: string;
  };
  issuedOn: string;
}
