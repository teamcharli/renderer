import { TemplateWithComponent } from "@govtechsg/decentralized-renderer-react-components";
import { CertificateOfAchievement } from "./certificateOfAchievement";
import { Recommendations } from "./recommendations";
import { GovTechCertificateTemplate } from "./types";

export const templates: TemplateWithComponent<GovTechCertificateTemplate>[] = [
  {
    id: "CERTIFICATE_OF_ACHIEVEMENT",
    label: "Certificate",
    template: CertificateOfAchievement
  },
  {
    id: "RECOMMENDATIONS",
    label: "Recommendations",
    template: Recommendations,
    predicate: ({ document }) => (document.recommendations ?? []).length > 0
  }
];
