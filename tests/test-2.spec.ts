import { test, expect } from '@playwright/test';

test('logout test', async ({ page }) => {
  // Navigate to the application
  await page.goto('https://spark-cloud.vercel.app/');
  
  // Fill in the email
  await page.getByPlaceholder('sarah.kim@example.com').click();
  await page.getByPlaceholder('sarah.kim@example.com').fill('aayushikarcbit+18nov@gmail.com');
  
  // Fill in the password
  await page.getByPlaceholder('*******').click();
  await page.getByPlaceholder('*******').fill('AayushiKar@1234');
  
  // Click on the login button
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Click on the logout button
  await page.getByRole('button', { name: 'Logout' }).click();
  
  // Confirm logout
  await page.getByRole('button', { name: 'Yes' }).click();
  
  // Verify that the user is redirected to the login page with "Welcome back" and the input fields
  await expect(page.locator('h1', { hasText: 'Welcome back' })).toBeVisible();

});
