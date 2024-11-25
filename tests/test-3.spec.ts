import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://spark-cloud.vercel.app/');
  await page.getByPlaceholder('sarah.kim@example.com').click();
  await page.getByPlaceholder('sarah.kim@example.com').dblclick();
  await page.getByPlaceholder('sarah.kim@example.com').fill('aayushikarcbit+18nov@gmail.com');
  await page.getByPlaceholder('*******').click();
  await page.getByPlaceholder('*******').click();
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('A');
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('Aayushi');
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('AayushiK');
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('AayushiKar@1234');
  await page.locator('span').nth(1).click();
  await page.getByPlaceholder('*******').click();
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Workstation' }).click();
  await page.getByRole('button', { name: 'Create new workstation' }).click();
  await page.getByRole('button', { name: 'Custom configuration Custom' }).click();
  await page.getByRole('button', { name: 'Mumbai' }).click();
  await page.goto('https://spark-cloud.vercel.app/dashboard/workstation');
  await page.getByRole('link', { name: 'Manage Account' }).click();
  await page.getByRole('button', { name: 'Security' }).click();
  await page.getByText('Account Info Security Payment').click();
  await page.getByRole('button', { name: 'Account Info' }).click();
  await page.getByRole('button', { name: 'Account Info' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
});