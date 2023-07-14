import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { GeekOutCertificateInterface } from "../types";

export const championSampleCertificate: GeekOutCertificateInterface = {
  recipient: {
    name: "Vaithiyanathan Sri Kesava Raman"
  },
  type: "champion",
  issuers: [
    {
      name: "GovTech Singapore"
    }
  ],
  $template: {
    name: "GEEK_OUT_2021",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};

export const runnerupSampleCertificate = { ...championSampleCertificate, type: "runner-up" };

export const completionSampleCertificate = { ...championSampleCertificate, type: "completion" };
