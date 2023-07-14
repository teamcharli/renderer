import { Selector } from "testcafe";
import { sampleCertificate } from "../templates/certificateOfAchievement/fixtures/sample";
import percySnapshot from "@percy/testcafe";

const document = { ...sampleCertificate };
fixture("GovTech Internship Certificate of Achievement").page`http://localhost:3000`;

const CustomTemplate = Selector("#certificate-of-achievement");

test("Certificate of Achievement is rendered correctly", async test => {
  await test.eval(
    () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore can't find a way to have this working on test cafe
      window.openAttestation({
        type: "RENDER_DOCUMENT",
        payload: {
          document
        }
      });
    },
    {
      dependencies: {
        document
      }
    }
  );
  await test.expect(CustomTemplate.visible).ok();
  await test.expect(CustomTemplate.textContent).contains("Certificate of Achievement");
  await test.expect(CustomTemplate.textContent).contains("Achievement unlocked! Way to go!");
  await test.expect(CustomTemplate.textContent).contains("Steven Koh");
  await test.expect(CustomTemplate.textContent).contains("You have completed the GovTech Internship Programme.");
  await test.expect(CustomTemplate.textContent).contains("4 May 2020 to 7 Oct 2020");
  await test.expect(CustomTemplate.textContent).contains("Evangeline Chua");
  await test.expect(CustomTemplate.textContent).contains("Chief People Officer");

  // take a snapshot
  await percySnapshot(test, "Rendered custom template");
});
