import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://spark-cloud.vercel.app/');
  await page.getByPlaceholder('sarah.kim@example.com').click();
  await page.getByPlaceholder('sarah.kim@example.com').fill('aayushikarcbit+18nov@gmail.com');
  await page.getByPlaceholder('*******').click();
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('A');
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('Aayushi');
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('AayushiK');
  await page.getByPlaceholder('*******').press('CapsLock');
  await page.getByPlaceholder('*******').fill('AayushiKar@123');
  
  
});