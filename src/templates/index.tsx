import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./certificateOfAchievement";
import { certificateOfServiceTemplate } from "./certificateOfService";
import { geekOut2020Template } from "./geekOut/geekOut2020";
import { geekOut2021Template } from "./geekOut/geekOut2021";
import { covidLetterOfAppreciationTemplate } from "./covidAppreciationLetter";
import { geekOutV2Template } from "./geekOut/geekOutV2";

export const registry: TemplateRegistry<any> = {
  CERTIFICATE_OF_ACHIEVEMENT: templates,
  CERTIFICATE_OF_SERVICE: certificateOfServiceTemplate,
  GEEK_OUT_2020: geekOut2020Template,
  GEEK_OUT_2021: geekOut2021Template,
  GEEK_OUT_V2: geekOutV2Template,
  COVID_LETTER_OF_APPRECIATION_2021: covidLetterOfAppreciationTemplate
};
