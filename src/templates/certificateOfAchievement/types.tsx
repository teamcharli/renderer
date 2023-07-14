import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface GovTechCertificateTemplate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name?: string;
    firstName: string;
    lastName: string;
    email?: string;
    nric?: string;
  };
  programme: {
    name: string;
    startDate: string;
    endDate: string;
  };
  recommendations?: {
    recommendation?: string;
    name?: string;
  }[];
  signatory: {
    name: string;
    position: string;
    organisation: string;
    signature: string;
  };
}
