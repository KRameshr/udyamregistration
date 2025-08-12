const puppeteer = require("puppeteer");

(async () => {
  const url = "https://udyamregistration.gov.in/UdyamRegistration.aspx";

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  // Example: extract all input fields from Step 1 form
  const formFields = await page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll("input, select"));
    return inputs.map((input) => ({
      id: input.id,
      name: input.name,
      type: input.type,
      placeholder: input.placeholder || null,
      label: input.labels ? input.labels[0]?.innerText : null,
      required: input.required,
    }));
  });

  console.log(JSON.stringify(formFields, null, 2));

  await browser.close();
})();
