import championBackground from "./geekOut2021/image/Champion.png";
import runnerUpBackground from "./geekOut2021/image/RunnerUp.png";
import completionBackground from "./geekOut2021/image/Completion.png";
import championBackgroundV2 from "./geekOutV2/image/champion.png";
import completionBackgroundV2 from "./geekOutV2/image/completion.png";
import runnerUpBackgroundV2 from "./geekOutV2/image/runnerUp.png";
import firstPlaceBackground from "./geekOutV2/image/firstPlace.png";
import secondPlaceBackground from "./geekOutV2/image/secondPlace.png";
import thirdPlaceBackground from "./geekOutV2/image/thirdPlace.png";
import specialMentionBackground from "./geekOutV2/image/specialMention.png";
import { DocumentType } from "./geekOutV2/types";

export const getBackgroundImage = (documentType: DocumentType, isV2: boolean): any => {
  switch (documentType) {
    case "champion":
      return isV2 ? championBackgroundV2 : championBackground;
    case "runner-up":
      return isV2 ? runnerUpBackgroundV2 : runnerUpBackground;
    case "completion":
      return isV2 ? completionBackgroundV2 : completionBackground;
    case "first":
      return firstPlaceBackground;
    case "second":
      return secondPlaceBackground;
    case "third":
      return thirdPlaceBackground;
    case "special-mention":
      return specialMentionBackground;
  }
};
