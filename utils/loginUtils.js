import { test, expect, Page } from '@playwright/test';

export async function loginIntoTheApplication(page) {
    await page.goto('https://partner-qa.point.dev/login');
    await expect(page).toHaveTitle(/Know before you go/);
    await page.locator('input[name="agreed_to_terms"]').check({ force: true });
    await page.locator('input[name="email"]').fill("qaautoamtion@test.com");
    await page.getByRole('button', { name: /Login/ }).click();
  }
