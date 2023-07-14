import { TemplateWithComponent } from "@govtechsg/decentralized-renderer-react-components";
import { GeekOut2021 } from "./geekOut2021";
import { GeekOutCertificateInterface } from "./types";

export const geekOut2021Template: TemplateWithComponent<GeekOutCertificateInterface>[] = [
  {
    id: "GEEK_OUT_2021",
    label: "Certificate",
    template: GeekOut2021
  }
];
