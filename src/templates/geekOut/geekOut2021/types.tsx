import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export type DocumentType = "champion" | "runner-up" | "completion";

export interface GeekOutCertificateInterface extends v2.OpenAttestationDocument {
  recipient: {
    name: string;
  };
  type: DocumentType;
}
