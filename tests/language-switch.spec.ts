import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 1280, height: 720 } });

test.describe("Language switching", () => {
  test("should switch from Georgian to English without flicker", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Screenshot before switch
    await page.screenshot({ path: "tests/screenshots/before-switch.png" });

    // The default locale is Georgian — language buttons show ინგ/ქარ uppercased
    const enButton = page.locator("button", { hasText: "ინგ" }).first();
    await expect(enButton).toBeVisible({ timeout: 10000 });
    await enButton.click();

    // Wait for navigation to complete
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1500);

    // Screenshot after switch
    await page.screenshot({
      path: "tests/screenshots/after-switch-to-en.png",
    });

    // Verify English locale
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "en");
    await expect(html).toHaveClass("locale-en");
  });

  test("should switch from English to Georgian without flicker", async ({
    page,
  }) => {
    await page.goto("/en");
    await page.waitForLoadState("networkidle");

    // In English locale, buttons show ENG/GEO
    const kaButton = page.locator("button", { hasText: "GEO" }).first();
    await expect(kaButton).toBeVisible({ timeout: 10000 });
    await kaButton.click();

    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1500);

    await page.screenshot({
      path: "tests/screenshots/after-switch-to-ka.png",
    });

    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "ka");
    await expect(html).toHaveClass("locale-ka");
  });

  test("should not show layout shift during language switch", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Use the language button itself as an anchor to measure position
    const enButton = page.locator("button", { hasText: "ინგ" }).first();
    await expect(enButton).toBeVisible({ timeout: 10000 });

    const posBefore = await enButton.boundingBox();

    await enButton.click();

    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1500);

    // After switch, the button text changes to ENG
    const engButton = page.locator("button", { hasText: "ENG" }).first();
    await expect(engButton).toBeVisible({ timeout: 10000 });

    const posAfter = await engButton.boundingBox();

    // Button position should not jump vertically
    expect(posBefore).not.toBeNull();
    expect(posAfter).not.toBeNull();
    if (posBefore && posAfter) {
      expect(Math.abs(posAfter.y - posBefore.y)).toBeLessThan(5);
    }
  });
});
