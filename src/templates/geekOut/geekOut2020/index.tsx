import { TemplateWithComponent } from "@govtechsg/decentralized-renderer-react-components";
import { GeekOut2020 } from "./geekOut2020";
import { GeekOutCertificateTemplate } from "./types";

export const geekOut2020Template: TemplateWithComponent<GeekOutCertificateTemplate>[] = [
  {
    id: "GEEK_OUT_2020",
    label: "Certificate",
    template: GeekOut2020
  }
];
