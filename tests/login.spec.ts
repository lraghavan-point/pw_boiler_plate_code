import { test, expect, Page } from '@playwright/test';
import { loginIntoTheApplication } from '../utils/loginUtils';

test('has title', async ({ page }) => {
  // This is a simple helper function to login to the partner portal
  // We don't necessarily expect you to follow this form or this function.
  // Write the automation script as how you would given the opportunity.
  await loginIntoTheApplication(page);
});