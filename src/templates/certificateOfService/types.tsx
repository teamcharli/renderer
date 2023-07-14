import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CertificateofServiceInterface extends v2.OpenAttestationDocument {
  recipient: {
    name: string;
    rank: string;
  };
  issuedOn: string;
}
