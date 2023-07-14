import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { geekout } from "@govtechsg/oa-schemata";

export type DocumentType = "champion" | "runner-up" | "completion" | "first" | "second" | "third" | "special-mention";

export type GeekOutCertificateTemplateV2 = v2.OpenAttestationDocument &
  geekout.Geekout & {
    message: string;
    type: DocumentType;
  };
