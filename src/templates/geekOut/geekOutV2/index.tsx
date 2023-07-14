import { TemplateWithComponent } from "@govtechsg/decentralized-renderer-react-components";
import { GeekOutV2 } from "./geekOutV2";
import { GeekOutCertificateTemplateV2 } from "./types";

export const geekOutV2Template: TemplateWithComponent<GeekOutCertificateTemplateV2>[] = [
  {
    id: "GEEK_OUT_V2",
    label: "Certificate",
    template: GeekOutV2
  }
];
